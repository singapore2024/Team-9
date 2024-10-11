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
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dvKIk0BvtJIGD33l7FgJhaxpJ8jSVge3ag&s",
      name: "Cherry Tomatoes",
      type: "buy",
      price: "S$6",
      description: "Freshly picked from my home garden, these sweet and juicy cherry tomatoes are bursting with flavor! 🌱 Limited quantity, so grab yours while they’re still in season! Message me for details or to place an order. 🌞👩‍🌾🍅",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/0uBuHOo5VO8/maxresdefault.jpg",
      name: "Cucumbers",
      type: "barter",
      description: "Crisp, refreshing, and straight from my garden! Ideal for salads, pickling, or enjoying on their own as a crunchy snack. Hoping to trade with some fresh fruit produce! 🌿🥒🌟",
    },
    {
      imageUrl: "data:image/jpeg;base64,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",
      name: "Mint Leaves",
      type: "buy",
      price: "S$3",
      description: "Add a burst of freshness to your dishes and drinks with my homegrown mint leaves! 🌱 Picked fresh upon order to ensure maximum flavor and quality. Available in 50g bunches for just $3 each. Get yours now and elevate your culinary creations! 🌟🌿✨",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwK5ZPzpYHmhBlLLfXKl2nI-pRp41S47WxYA&s",
      name: "Bell Peppers",
      type: "barter",
      description: "Bright, crunchy, and bursting with natural sweetness—my homegrown bell peppers are perfect for adding a pop of color and flavor to any dish! 🌱 Available for barter only—I’m looking to trade for fresh produce or homemade goods. 🍎🥕",
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
