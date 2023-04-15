import { ApiResponse } from "./State";

interface Review {
  id: string;
  description: string;
  rating: number;
  book_title: string;
  reviewer: string;
}

type Rating = "1" | "2" | "3" | "4" | "5";

export interface ReviewState {
  getAllApi: ApiResponse<Review[]> | null;
  overview: { [key in Rating[number]]: Array<Review> } | null;
}
