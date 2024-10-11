import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface ImageCardProps {
  type?: string;
  imageUrl: string;
  name: string;
  price?: string;
  description: string;
}

 
export function CardWithForm({type = "barter", imageUrl, name, price, description}: ImageCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="relative">
          <img
            src="https://www.shutterstock.com/image-vector/identity-business-corporate-souvenir-promotion-260nw-1444852277.jpg"
            alt="Bicycle"
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
          ) : <p className="text-green-600 font-bold">Barter Only</p>}
          <p className="text-sm text-gray-600">Lightly used</p>
        </div>
      </CardContent>
     
    </Card>
  );
}