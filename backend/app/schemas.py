# backend/app/schemas.py
from pydantic import BaseModel
from typing import Optional
from bson import ObjectId as PyObjectId

class ListingCreate(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    quantity: float
    type: str
    price: Optional[str] = None
    unit: Optional[str] = "kg"  # Default unit is kg

class Listing(ListingCreate):
    id: Optional[str] = None 


class OfferCreate(BaseModel):
    listing_id: str  # Reference to the Listing ID (as a string for MongoDB compatibility)
    proposed_quantity: float
    proposed_item: str
    message: Optional[str] = None  # Optional message describing the offer

class OfferResponse(OfferCreate):
    id: Optional[str] = None  # MongoDB _id will be stored here as a string
    user_id: Optional[str] = None 
