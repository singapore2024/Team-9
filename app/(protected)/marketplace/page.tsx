'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AddListingForm from '@/components/AddListingForm';

const Marketplace = () => {
  const [view, setView] = useState<'barter' | 'sell'>('barter'); // Track selected view
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const handleAddListingClick = () => {
    setIsModalOpen(true); // Show the form modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the form modal
  };

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
            value="sell"
            aria-label="Sell View"
            aria-selected={view === 'sell'}
            onClick={() => setView('sell')}
          >
            Sell
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Search Bar and Add Listings Button */}
      <div className="flex items-center mb-6 space-x-4">
        <Input type="text" placeholder="Search listings..." className="flex-1" />
        
        <Button className="bg-blue-950 text-white px-4 py-2 rounded-md" onClick={handleAddListingClick}>
          Add Listing
        </Button>
      </div>
      
      {/* Placeholder for listings */}
      <div>
        <p>Currently viewing: {view} listings</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <AddListingForm onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}

export default Marketplace;
