import { z } from "zod";

const ReviewData = z.object({
  id: z.string(),
  description: z.string(),
  rating: z.number(),
  book_title: z.string(),
  reviewer: z.string(),
});

export const ApiResponseReview = z.object({
  status: z.string(),
  result: z.number(),
  data: ReviewData.array(),
  total: z.number(),
  message: z.string(),
});

export type ReviewData = z.infer<typeof ReviewData>;
export type ApiResponseReview = z.infer<typeof ApiResponseReview>;

export const ApiResponseReviewAuthors = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      name_of_author: z.string(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseReviewAuthors = z.infer<typeof ApiResponseReviewAuthors>;

export const ApiResponseReviewBooksForAuthor = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      title: z.string(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseReviewBooksForAuthor = z.infer<
  typeof ApiResponseReviewBooksForAuthor
>;

interface Review {
  id: string;
  description: string;
  rating: number;
  bookTitle: string;
  reviewer: string;
}

interface AuthorForReview {
  id: string;
  nameOfAuthor: string;
}

interface BooksByAuthorForReview {
  id: string;
  title: string;
}

type Rating = "1" | "2" | "3" | "4" | "5";

export interface ReviewState {
  getAllApi: ApiResponseReview | null;
  isLoading: boolean;
  overview: { [key in Rating[number]]: Array<Review> } | [];
  authorsForReview: AuthorForReview[];
  authorsForReviewApi: ApiResponseReviewAuthors | null;
  booksByAuthorForReview: BooksByAuthorForReview[];
  booksByAuthorForReviewApi: ApiResponseReviewBooksForAuthor | null;
}
