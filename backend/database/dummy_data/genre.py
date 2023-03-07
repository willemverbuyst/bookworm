import faker
import csv
import datetime


genres=[
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Action & Adventure",
  "Mystery",
  "Horror",
  "Thriller & Suspense",
  "Historical Fiction",
  "Romance",
  "Women’s Fiction",
  "LGBTQ+",
  "Contemporary Fiction",
  "Literary Fiction",
  "Magical Realism",
  "Graphic Novel",
  "Short Story",
  "Young Adult",
  "New Adult",
  "Children’s",
  "Memoir & Autobiography",
  "Biography",
  "Food & Drink",
  "Art & Photography",
  "Self-help",
  "History",
  "Travel",
  "True Crime",
  "Humor",
  "Essays",
  "Guide / How-to",
  "Religion & Spirituality",
  "Humanities & Social Sciences",
  "Parenting & Families",
  "Science & Technology"
]

with open('genre.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "genre_id", 
      "name",
      "last_updated"
    ]
    
    writer.writerow(header)
    for num, name in enumerate(genres, start=1):
      writer.writerow([
        num, 
        name,
        datetime.datetime.now()      
      ])
