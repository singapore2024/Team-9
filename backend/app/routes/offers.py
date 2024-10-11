# backend/app/routes/offers.py

from fastapi import APIRouter, Depends, HTTPException
from ..database import get_db
from ..schemas import OfferCreate, OfferResponse
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient 

router = APIRouter(prefix="/offers", tags=["offers"])

@router.post("/", response_model=OfferResponse)
async def create_offer(offer: OfferCreate, db=Depends(get_db), user_id: int = 1):
    offers_collection = db["offers"]
    listings_collection = db["listings"] 

    listing = await listings_collection.find_one({"_id": offer.listing_id})

    if listing is None:
        raise HTTPException(status_code=404, detail=f"Listing with id {offer.listing_id} not found")

    offer_dict = offer.dict()
    offer_dict["listing_id"] = offer.listing_id  
    offer_dict["user_id"] = str(user_id) 

    result = await offers_collection.insert_one(offer_dict)

    offer_dict["id"] = str(result.inserted_id)

    return offer_dict

@router.get("/", response_model=list[OfferResponse])
async def get_offers(skip: int = 0, limit: int = 10, db=Depends(get_db)):
    offers_collection = db["offers"]
    offers = await offers_collection.find().skip(skip).limit(limit).to_list(length=limit)
    return offers
