export interface Review {
  id: string;
  description: string;
  rating: number;
  book_title: string;
  reviewer: string;
}

export interface ReviewApi {
  status: string;
  result: number;
  data: Array<Review>;
  total: number;
  message: string;
}
