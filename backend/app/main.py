from app.routes import listings, offers
from fastapi import FastAPI

from . import models, database

app = FastAPI()

app.include_router(listings.router)
app.include_router(offers.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Marketplace!"}
