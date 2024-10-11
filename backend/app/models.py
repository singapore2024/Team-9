from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Text, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Listing(Base):
    __tablename__ = "listings"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    quantity = Column(Float)
    type = Column(String)
    price = Column(String)
    unit = Column(String, default="kg")
    filepath = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="listings")
    offers = relationship("Offer", back_populates="listing")

class Offer(Base):
    __tablename__ = "offers"
    id = Column(Integer, primary_key=True, index=True)
    listing_id = Column(Integer, ForeignKey("listings.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    proposed_quantity = Column(Float)
    proposed_item = Column(String)
    message = Column(Text)
    status = Column(String, default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)
    listing = relationship("Listing", back_populates="offers")
    user = relationship("User", back_populates="offers")
