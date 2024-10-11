'use client'
import React from 'react'
import { CardWithForm } from '@/pages/market';

export default function Page() {
  const exampleCards = [
    {
      imageUrl: "https://www.shutterstock.com/image-vector/identity-business-corporate-souvenir-promotion-260nw-1444852277.jpg",
      name: "Vegetable 1",
      type: "buy",
      price: "S$70",
      description: "Vegetables ",
    },
    {
      imageUrl: "https://www.shutterstock.com/image-photo/old-laptop-white-background-260nw-676189061.jpg",
      name: "Vegetable 2",
      type: "barter",
      description: "Looking to trade this laptop for another gadget.",
    },
    {
      imageUrl: "https://www.shutterstock.com/image-photo/second-hand-sofa-isolated-on-260nw-1765406379.jpg",
      name: "Vegetable 3",
      type: "buy",
      price: "S$150",
      description: "Comfortable 3-seater, lightly used, still in good condition.",
    },
    {
      imageUrl: "https://www.shutterstock.com/image-photo/antique-vintage-camera-on-wooden-260nw-1414476769.jpg",
      name: "Vegetable 4",
      type: "barter",
      description: "Looking for a trade, rare vintage film camera.",
    },
  ]

  return (
    <div className=" p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {exampleCards.map((card, index) => (
          <div className="mx-4 flex flex-wrap" key={index}> 
            <CardWithForm
              imageUrl={card.imageUrl}
              name={card.name}
              price={card.price}
              description={card.description}
              type={card.type}
            />
          </div>
        ))}
      </div>
    </div>
  );

}
