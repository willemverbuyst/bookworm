export interface Review {
  author: string;
  bookTitle: string;
  review: string;
  rating: number | null;
}

export interface ReviewApi {
  status: string;
  data: null;
  message: string;
}
