import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ImageCardProps {
  type?: string;
  imageUrl: string;
  name: string;
  price?: string;
  description: string;
  onActionClick: (data: { type: string; name: string; price?: string }) => void; // Updated prop type
}

export function CardWithForm({
  type = "barter",
  imageUrl,
  name,
  price,
  description,
  onActionClick,
}: ImageCardProps) {
  const handleActionClick = () => {
    onActionClick({ type, name, price }); // Pass the required data to parent
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="relative">
          <img
            src="https://quanfaorganic.com.sg/cdn/shop/products/ketobox_1.jpg?v=1705308414"
            alt={name}
            className="w-full h-[200px] object-cover rounded"
          />
          <span className="absolute bottom-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
            {type === "buy" ? "Buy" : "Barter"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-lg font-semibold">{name}</h3>
          {type === "buy" && price ? (
            <p className="text-green-600 font-bold">{price}</p>
          ) : (
            <p className="text-green-600 font-bold">Barter Only</p>
          )}
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Like</Button>
        <Button className="bg-green-500" onClick={handleActionClick}>
          {type === "buy" ? "Buy" : "Barter"}
        </Button>
      </CardFooter>
    </Card>
  );
}
