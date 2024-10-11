import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface BuyFormProps {
  transactionType: 'buy' | 'barter'; // Define the type of form,
  onClose: () => void; // Close handler for the modal
}

const BuyForm: React.FC<BuyFormProps> = ({ transactionType, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    quantity: 1,
    image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === 'quantity' ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✕</button>
      <h2 className="text-xl font-semibold mb-4">
        {transactionType === 'buy' ? "Confirm Purchase" : "Barter Item"}
      </h2>
      <h1 className="text-s mb-2"> {transactionType === 'barter' ? "Please indicate details of the item you want to exchange." : ""} </h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Title and Quantity for both types */}
          {
            transactionType === 'barter' && (
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" placeholder="Item Title" onChange={handleInputChange} />
              </div>

            )
          }
          
          
          {transactionType === 'barter' && (
            <>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" min="1" onChange={handleInputChange} />
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
              </div>
            </>
          )}
          
          <Button type="submit" className="w-full bg-green-900 text-white">
            {transactionType === 'buy' ? "Confirm" : "Submit Barter Request"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
