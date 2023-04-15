import { ApiResponse } from "./State";

export interface Review {
  id: string;
  description: string;
  rating: number;
  book_title: string;
  reviewer: string;
}

export interface ReviewState {
  getAllApi: ApiResponse<Array<Review>> | null;
  overview: { [key: string]: Array<Review> } | null;
}
