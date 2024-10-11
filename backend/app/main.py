from app.routes import listings, offers
from fastapi import FastAPI

from . import models, database

# Create the FastAPI app instance
app = FastAPI()

# Include routers for different endpoints
app.include_router(listings.router)
app.include_router(offers.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Marketplace!"}
