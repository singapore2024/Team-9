'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Marketplace = () => {
  const [view, setView] = useState<'barter' | 'sell'>('barter'); // Track selected view

  return (
    <div className="p-6">
      {/* Header and Toggle Group */}
      <div className="flex items-center justify-between mb-4">
        {/* Marketplace Header */}
        <h1 className="text-2xl font-semibold">Marketplace</h1>
        
        {/* Toggle Group for View Selection */}
        <ToggleGroup variant="outline" type="single" className="flex space-x-1">
          <ToggleGroupItem
            value="barter"
            aria-label="Barter View"
            selected={view === 'barter'}
            onClick={() => setView('barter')}
          >
            Barter
          </ToggleGroupItem>
          <ToggleGroupItem
            value="sell"
            aria-label="Sell View"
            selected={view === 'sell'}
            onClick={() => setView('sell')}
          >
            Sell
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Search Bar and Add Listings Button */}
      <div className="flex items-center mb-6 space-x-4">
        {/* Search Input */}
        <Input type="text" placeholder="Search listings..." className="flex-1" />
        
        {/* Add Listings Button */}
        <Button className="bg-blue-950 text-white px-4 py-2 rounded-md">
          Add Listing
        </Button>
      </div>
      
      {/* Placeholder for listings */}
      <div>
        <p>Currently viewing: {view} listings</p>
        <p>Listings will appear here.</p>
      </div>
    </div>
  );
}

export default Marketplace;
