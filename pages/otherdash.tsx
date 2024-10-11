"use client";
import { Button } from "@/components/ui/button";
import {NumberOfSeller } from "@/pages/board";
import { Users, Vegan } from "lucide-react";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemandSupplyGraph } from "./ddss";
import { NumberOfBuyer } from "./buyer";
import { VegetableMenu } from "./vege";

export default function DashboardComponents() {
  const [view, setView] = useState<"Seller" | "Buyer">("Buyer"); // Track the current view

  const recentSales = [
    { name: "Olivia Martin", product: "Carrots", quantity: 2 },
    { name: "Jackson Lee", product: "Tomatoes", quantity: 1 },
    { name: "Isabella Nguyen", product: "Lettuce", quantity: 1 },
    { name: "William Kim", product: "Broccoli", quantity: 0.5 },
    { name: "Sofia Davis", product: "Spinach", quantity: 1 },
  ];

  // Excess vegetables for the Buyer's view
  const excessVegetables = [
    { name: "Olivia Rodrigo", product: "Carrots", excess: 5 },
    { name: "Bob", product: "Tomatoes", excess: 3 },
    { name: "John", product: "Lettuce", excess: 4 },
    { name: "Christopher", product: "Broccoli", excess: 2 },
    { name: "Doofus", product: "Spinach", excess: 6 },
  ];

  return (
    <div className="dashboard">
      {/* Toggle Button for switching views */}
      <div className="toggle-section flex border p-4 rounded-xl">
        {/* Seller's View Button */}
        <Button
          variant="ghost"
          className={`text-xl ${view === "Seller" ? "bg-gray-100" : "bg-white"} mx-2`}
          onClick={() => setView("Seller")}
        >
          Seller's View
        </Button>

        {/* Buyer's View Button */}
        <Button
          variant="ghost"
          className={`text-xl ${view === "Buyer" ? "bg-gray-100" : "bg-white"} mx-2`}
          onClick={() => setView("Buyer")}
        >
          Buyer's View
        </Button>
      </div>

      {/* Overview Section */}
      {view === "Seller" ? (
        <div className="overview-cards grid grid-cols-2 gap-4 p-4">
          <div className="card border p-4 rounded">
            <span className="flex justify-between">
              <h2 className="text-black text-lg ml-2">Total Number of Buyers</h2>
              <Users />
            </span>
            <p className="text-black text-3xl px-2 py-1">650</p>
            <span className="text-green-500 text-xl">+10.1% from last month</span>
          </div>
          <div className="card border p-4 rounded">
            <span className="flex justify-between">
              <h2 className="text-black text-lg ml-2">Total Vegetable Consumed (kg)</h2>
              <Vegan />
            </span>
            <p className="text-black text-3xl px-2 py-1">1200</p>
            <span className="text-green-500 text-xl">+20% from last month</span>
          </div>
        </div>
      ) : (
        <div className="overview-cards grid grid-cols-2 gap-4 p-4">
          <div className="card border p-4 rounded">
            <span className="flex justify-between">
              <h2 className="text-black text-lg ml-2">Total Number of Sellers</h2>
              <Users />
            </span>
            <p className="text-black text-3xl px-2 py-1">700</p>
            <span className="text-green-500 text-xl">+15.2% from last month</span>
          </div>
          <div className="card border p-4 rounded">
            <span className="flex justify-between">
              <h2 className="text-black text-lg ml-2">Total Vegetable Sold (kg)</h2>
              <Vegan />
            </span>
            <p className="text-black text-3xl px-2 py-1">1500</p>
            <span className="text-green-500 text-xl">+10% from last month</span>
          </div>
        </div>
      )}

      <div className="flex">
        <div className="graph-section p-4 flex-1">
          <DemandSupplyGraph />
        </div>
      </div>
      
      <div className="flex space-x-4">
        {view === "Seller" ? (
           <div className="graph-section p-4 flex-1">
            <NumberOfBuyer />
            </div>
        ) : (
          <div className="graph-section p-4 flex-1">
            <NumberOfSeller />

          </div>
        )
 

        }
        

        {/* Recent Sales / Excess Vegetables */}
        <div className="recent-sales p-4 flex-1">
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 font-semibold mb-4">
                {view === "Seller"
                  ? "Vegetables Requested In Neighbourhood"
                  : "Vegetables In Excess In Neighbourhood"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {view === "Seller"
                  ? recentSales.map((sale, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-gray-900">
                          <p className="font-semibold">{sale.name}</p>
                          <p className="text-gray-500 text-sm">{sale.product}</p>
                        </div>
                        <p className="text-black font-semibold text-lg">{sale.quantity} kilogram</p>
                      </li>
                    ))
                  : excessVegetables.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-gray-900">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-sm">{item.product}</p>
                        </div>
                        <p className="text-black font-semibold text-lg">{item.excess} kilogram</p>
                      </li>
                    ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
