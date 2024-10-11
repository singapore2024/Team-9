# backend/app/routes/listings.py

from fastapi import APIRouter, Depends, HTTPException
from ..database import get_db  # Relative import for database dependency
from .. import schemas  # Relative import for schemas module
from bson import ObjectId

router = APIRouter(prefix="/listings", tags=["listings"])

@router.post("/", response_model=schemas.Listing)
async def create_listing(listing: schemas.ListingCreate, db=Depends(get_db), user_id: int = 1):  # Default user_id for testing
    listings_collection = db["listings"]  # Access the "listings" collection in MongoDB

    # Convert the Pydantic model to a dictionary and add user_id
    listing_dict = listing.dict()
    listing_dict["owner_id"] = user_id  # Include the owner_id in the document

    # Optionally set a custom id value here. For example, use a new ObjectId or another unique identifier.
    listing_dict["_id"] = str(ObjectId())  # Set a custom MongoDB _id field
    listing_dict["id"] = listing_dict["_id"]  # Assign the same value to the `id` field

    # Insert the listing into MongoDB
    result = await listings_collection.insert_one(listing_dict)

    # Return the listing with the updated id field
    return listing_dict
@router.get("/", response_model=list[schemas.Listing])
async def get_listings(skip: int = 0, limit: int = 10, db=Depends(get_db)):
    listings_collection = db["listings"]
    listings = await listings_collection.find().skip(skip).limit(limit).to_list(length=limit)
    return listings
