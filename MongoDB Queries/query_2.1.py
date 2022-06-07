import re
from pymongo import MongoClient

# Requires the PyMongo package.
# https://api.mongodb.com/python/current

client = MongoClient('mongodb://localhost:27017/')
filter={
    'country': 'GB', 
    'tags': re.compile(r".*Saturday Night Live.*")
}
project={
    'title': 1, 
    'views': 1, 
    'likes': 1, 
    'dislikes': 1, 
    'tags': 1
}
sort=list({
    'views': -1
}.items())

result = client['youtubedb']['videos'].find(
  filter=filter,
  projection=project,
  sort=sort
)