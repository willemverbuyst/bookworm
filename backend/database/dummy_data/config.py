import uuid

BOOK=500
CITY=200
COUNTRY=50
GENRES=[
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
INVENTORY=3100
LANGUAGES=["EN", "NL", "ES", "FR"]
LIBRARY=2
PAGES_MAX=800
PAGES_MIN=50
RATING_MIN=0
RATING_MAX=5
RENTAL=8000
RENTAL_RATE_MIN=1
RENTAL_RATE_MAX=5
REPLACEMENT_COST_MAX=9
REVIEW=180
STAFF=2
USER_ACCOUNT=599

BOOKWORM = USER_ACCOUNT - STAFF

config = {
  "ADDRESS": [{"uuid": uuid.uuid4()} for i in range(300)],
  "AUTHOR": [{"uuid": uuid.uuid4()} for i in range(200)],
  "BOOK": [{"uuid": uuid.uuid4() } for i in range(500)],
  "BOOK_AUTHOR": [{"uuid": uuid.uuid4() } for i in range(500)],
  "CITY": [{"uuid": uuid.uuid4()} for i in range(200)],
  "COUNTRY": [{"uuid": uuid.uuid4()} for i in range(50)],
  "GENRE":[{"uuid": uuid.uuid4(), "genre": g} for g in GENRES ],
  "GENRES": [
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
  ],
  "LANGUAGE": [{"uuid": uuid.uuid4(), "language": l} for l in LANGUAGES ],
  "LANGUAGES": ["EN", "NL", "ES", "FR"],
  "LIBRARY": [{"uuid": uuid.uuid4()} for i in range(2)],
  "PAGES_MAX":800,
  "PAGES_MIN":50,
  "RATING_MIN":0,
  "RATING_MAX":5,
  "RENTAL_RATE":[{"uuid": uuid.uuid4(), "rate": i + 0.99} for i in range(5)],
  "REPLACEMENT_COST_MAX": 9,
  }