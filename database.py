import os
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi


async def fetch_data():
  uri = os.environ['connection_string']
  client = AsyncIOMotorClient(uri, server_api=ServerApi('1'))
  db = client.blog

  categories = db.categories
  blog_posts = db.blog_posts

  category_list = await fetch_from_collection(categories)
  post_list = await fetch_from_collection(blog_posts)

  return category_list, post_list


async def fetch_from_collection(collection):
  result_list = []
  async for item in collection.find({}):
    result_list.append(item)
  return result_list
