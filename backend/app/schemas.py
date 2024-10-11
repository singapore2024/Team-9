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
    unit: Optional[str] = "kg"
    filepath: Optional[str] = None

class Listing(ListingCreate):
    id: Optional[str] = None 


class OfferCreate(BaseModel):
    listing_id: str 
    proposed_quantity: float
    proposed_item: str
    message: Optional[str] = None 

class OfferResponse(OfferCreate):
    id: Optional[str] = None 
    user_id: Optional[str] = None 
