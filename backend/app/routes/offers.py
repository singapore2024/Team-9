# backend/app/routes/offers.py

from fastapi import APIRouter, Depends, HTTPException
from ..database import get_db
from ..schemas import OfferCreate, OfferResponse
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient  # MongoDB client for async operations

router = APIRouter(prefix="/offers", tags=["offers"])

@router.post("/", response_model=OfferResponse)
async def create_offer(offer: OfferCreate, db=Depends(get_db), user_id: int = 1):  # Default user_id for testing
    offers_collection = db["offers"]  # Access the "offers" collection in MongoDB
    listings_collection = db["listings"]  # Access the "listings" collection to validate listing_id

    # # Convert `listing_id` to ObjectId and validate it exists in the listings collection
    # if not ObjectId.is_valid(offer.listing_id):
    #     raise HTTPException(status_code=400, detail="Invalid listing_id format")

    # listing_id = ObjectId(offer.listing_id)
    listing = await listings_collection.find_one({"_id": offer.listing_id})

    if listing is None:
        raise HTTPException(status_code=404, detail=f"Listing with id {offer.listing_id} not found")

    # Convert the Pydantic model to a dictionary
    offer_dict = offer.dict()
    offer_dict["listing_id"] = offer.listing_id  # Ensure listing_id is stored as a string
    offer_dict["user_id"] = str(user_id)  # Store user_id as a string for MongoDB compatibility

    # Insert the offer into MongoDB
    result = await offers_collection.insert_one(offer_dict)

    # Add the MongoDB _id to the response dictionary and convert it to string
    offer_dict["id"] = str(result.inserted_id)

    return offer_dict

@router.get("/", response_model=list[OfferResponse])
async def get_offers(skip: int = 0, limit: int = 10, db=Depends(get_db)):
    offers_collection = db["offers"]
    offers = await offers_collection.find().skip(skip).limit(limit).to_list(length=limit)
    return offers
