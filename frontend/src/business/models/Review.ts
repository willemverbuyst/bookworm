import { z } from "zod";

export const ApiResponseReview = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      description: z.string(),
      rating: z.number(),
      book_title: z.string(),
      reviewer: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseReview = z.infer<typeof ApiResponseReview>;

interface Review {
  id: string;
  description: string;
  rating: number;
  bookTitle: string;
  reviewer: string;
}

type Rating = "1" | "2" | "3" | "4" | "5";

export interface ReviewState {
  getAllApi: ApiResponseReview | null;
  isLoading: boolean;
  overview: { [key in Rating[number]]: Array<Review> } | [];
}
