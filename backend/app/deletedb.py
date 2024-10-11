from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
db_uri = os.getenv("MONGODB_URI")
MONGODB_URI = db_uri
client = MongoClient(MONGODB_URI)
db = client["listings"] 

collection_name = "" 
result = db[collection_name].delete_many({})
print(f"Deleted {result.deleted_count} documents from the {collection_name} collection.")
