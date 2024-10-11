'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AddListingForm from '@/components/AddListingForm';
import { CardWithForm } from '@/pages/market';
import BuyForm from '@/components/BuyForm';
import Header  from '@/components/Header';

const Marketplace = () => {
  const [view, setView] = useState<'barter' | 'buy'>('barter');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ type: string; name: string; price?: string } | null>(null);
  const [transactionType, setTransactionType] = useState<'buy' | 'barter'>('barter');

  const handleOpenBuyBarterModal = (data: { type: string; name: string; price?: string }) => {
    setTransactionType(data.type as 'buy' | 'barter'); // Set transaction type
    setSelectedItem(data); // Set the selected item data
    setIsBuyModalOpen(true);
  };
  const handleCloseBuyBarterModal = () => { 
    setIsBuyModalOpen(false);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const exampleCards = [
    {
      imageUrl: "https://www.shutterstock.com/image-vector/identity-business-corporate-souvenir-promotion-260nw-1444852277.jpg",
      name: "Vegetable 1",
      type: "buy",
      price: "S$70",
      description: "Vegetables ",
    },
    {
      imageUrl: "https://www.littlestepsasia.com/wp-content/uploads/2019/12/Organic-Food-Delivery-Singapore.jpg",
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

  const filteredCards = exampleCards.filter(card => card.type === view);

  return (
    <div className="p-6">
      {/* Header and Toggle Group */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Marketplace</h1>
        
        <ToggleGroup variant="outline" type="single" className="flex space-x-1">
          <ToggleGroupItem
            value="barter"
            aria-label="Barter View"
            aria-selected={view === 'barter'}
            onClick={() => setView('barter')}
          >
            Barter
          </ToggleGroupItem>
          <ToggleGroupItem
            value="buy"
            aria-label="Buy View"
            aria-selected={view === 'buy'}
            onClick={() => setView('buy')}
          >
            Buy
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Search Bar and Add Listings Button */}
      <div className="flex items-center mb-6 space-x-4">
        <Input type="text" placeholder="Search listings..." className="flex-1" />
  
      </div>
      
      {/* Cards */}
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((card, index) => (
            <div className="mx-4 flex flex-wrap" key={index}> 
              <CardWithForm
                imageUrl={card.imageUrl}
                name={card.name}
                price={card.price}
                description={card.description}
                type={card.type}
                onActionClick={() => handleOpenBuyBarterModal({ type: card.type, name: card.name, price: card.price })} // Pass data to parent
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <AddListingForm onClose={handleCloseModal} />
        </div>
      )}

      {isBuyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <BuyForm transactionType={transactionType} onClose={handleCloseBuyBarterModal}/>
        </div>

      )}
    </div>
  );
}

export default Marketplace;
