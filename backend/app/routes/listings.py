# backend/app/routes/listings.py

from fastapi import APIRouter, Depends, HTTPException
from ..database import get_db  # Relative import for database dependency
from .. import schemas  # Relative import for schemas module
from bson import ObjectId

router = APIRouter(prefix="/listings", tags=["listings"])

@router.post("/", response_model=schemas.Listing)
async def create_listing(listing: schemas.ListingCreate, db=Depends(get_db), user_id: int = 1): 
    listings_collection = db["listings"] 

    listing_dict = listing.dict()
    listing_dict["owner_id"] = user_id 

    listing_dict["_id"] = str(ObjectId()) 
    listing_dict["id"] = listing_dict["_id"]  

    result = await listings_collection.insert_one(listing_dict)

    return listing_dict

@router.get("/", response_model=list[schemas.Listing])
async def get_listings(skip: int = 0, limit: int = 10, db=Depends(get_db)):
    listings_collection = db["listings"]
    listings = await listings_collection.find().skip(skip).limit(limit).to_list(length=limit)
    return listings
