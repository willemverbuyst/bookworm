import { z } from "zod";
import { UI } from "./State";

export const AuthorData = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  books_written: z.number(),
});

export const ApiResponseAuthor = z.object({
  status: z.string(),
  result: z.number(),
  data: AuthorData.array(),
  total: z.number(),
  message: z.string(),
});

export type AuthorData = z.infer<typeof AuthorData>;
export type ApiResponseAuthor = z.infer<typeof ApiResponseAuthor>;

export interface Author {
  id: string;
  "first name": string;
  "last name": string;
  "books written": number;
}

export const ApiResponseAuthorStatsPage = z.object({
  status: z.string(),
  data: z.object({
    pages_per_author: z
      .object({
        id: z.string(),
        author: z.string(),
        number_of_pages: z.number(),
        number_of_books: z.number(),
      })
      .array(),
    average_pages: z.number(),
  }),
  message: z.string(),
});

export type ApiResponseAuthorStatsPage = z.infer<
  typeof ApiResponseAuthorStatsPage
>;

interface Page {
  author: string;
  numberOfPages: number;
  numberOfBooks: number;
  avg: number;
}

export interface AuthorState {
  getAllApi: ApiResponseAuthor | null;
  isLoading: boolean;
  overview: Author[];
  statsPage: {
    pagesPerAuthor: Page[];
    averagePages: number;
  } | null;
  statsPageApi: ApiResponseAuthorStatsPage | null;
  ui: UI<Author, null>;
}
