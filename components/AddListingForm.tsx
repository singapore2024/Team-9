import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from 'next-auth/react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Autocomplete from "react-google-autocomplete";
import { z } from 'zod';

interface AddListingFormProps {
  onClose: () => void;
}

// Zod schema for form validation
const listingSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  listingType: z.enum(['barter', 'sell']),
  price: z.number().nonnegative().optional(),
  location: z.string().optional(),
});

const AddListingForm: React.FC<AddListingFormProps> = ({ onClose }) => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: 1,
    listingType: 'barter',
    price: undefined,
    location: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update form data based on field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'quantity' || id === 'price' ? Number(value) : value,
    }));
  };

  // Handle location selection without changing the Autocomplete component
  const handlePlaceSelected = (place: any) => {
    setFormData(prev => ({
      ...prev,
      location: place.formatted_address || '',
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = listingSchema.safeParse(formData);

    if (!result.success) {
      const formErrors = result.error.flatten().fieldErrors;
      setErrors(formErrors as Record<string, string>);
      return;
    }

    if (image) {
      const formDataToSend = new FormData();
      formDataToSend.append('image', image);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formDataToSend,
        });

        if (!response.ok) {
          throw new Error('File upload failed');
        }

        const responseData = await response.json();
        console.log('File uploaded successfully:', responseData.filePath);
      } catch (error) {
        console.error('Error uploading file:', error);
        setErrors(prev => ({ ...prev, form: 'Failed to upload file' }));
        return;
      }
    }

    console.log("Form Submitted Successfully:", result.data);
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✕</button>
      
      {/* Form Title */}
      <h2 className="text-xl font-semibold mb-4">Add a New Listing</h2>
      
      {/* Listing Form */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" type="text" placeholder="Listing Title" onChange={handleInputChange} />
            {errors.title && <p className="text-red-600">{errors.title}</p>}
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Listing Description" onChange={handleInputChange} />
            {errors.description && <p className="text-red-600">{errors.description}</p>}
          </div>
          
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" placeholder="Quantity" min="1" onChange={handleInputChange} />
            {errors.quantity && <p className="text-red-600">{errors.quantity}</p>}
          </div>
          
          <div>
            <Label>Listing Type</Label>
            <RadioGroup defaultValue="barter" onValueChange={(value) => setFormData(prev => ({ ...prev, listingType: value as 'barter' | 'sell' }))}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="barter" id="barter" />
                <Label htmlFor="barter">Barter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sell" id="sell" />
                <Label htmlFor="sell">Sell</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.listingType === 'sell' && (
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Price" min="0" step="0.01" onChange={handleInputChange} />
              {errors.price && <p className="text-red-600">{errors.price}</p>}
            </div>
          )}
          
          <div>
            <Autocomplete
              apiKey={""}
              onPlaceSelected={(place) => {
                console.log(place);
                handlePlaceSelected(place);
              }}

            />Select Location
          </div>
          
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          
          <Button type="submit" className="w-full bg-blue-950 text-white">Submit Listing</Button>
        </div>
      </form>
    </div>
  );
}

export default AddListingForm;
