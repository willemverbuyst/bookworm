import { z } from "zod";
import { UI } from "./State";

export const BookData = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  year_published: z.string(),
  genre: z.string(),
  language: z.string(),
});

export const ApiResponseBook = z.object({
  status: z.string(),
  result: z.number(),
  data: BookData.array(),
  total: z.number(),
  message: z.string(),
});

export type BookData = z.infer<typeof BookData>;
export type ApiResponseBook = z.infer<typeof ApiResponseBook>;
export interface Book {
  id: string;
  title: string;
  author: string;
  "year published": string;
  genre: string;
  language: string;
}

export const ApiResponseBookStatsGenre = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      genre: z.string(),
      number_of_books: z.number(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseBookStatsGenre = z.infer<
  typeof ApiResponseBookStatsGenre
>;

interface Genre {
  genre: string;
  numberOfBooks: number;
}

export const ApiResponseBookStatsLanguage = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      language: z.string(),
      number_of_books: z.number(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseBookStatsLanguage = z.infer<
  typeof ApiResponseBookStatsLanguage
>;

interface Language {
  language: string;
  numberOfBooks: number;
}

export const ApiResponseBookStatsYearPublished = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      year_published: z.string(),
      number_of_books: z.number(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseBookStatsYearPublished = z.infer<
  typeof ApiResponseBookStatsYearPublished
>;

interface YearPublished {
  yearPublished: number;
  numberOfBooks: number;
}

interface Filter {
  genre: string;
  language: string;
}

export interface BookState {
  getAllApi: ApiResponseBook | null;
  isLoading: boolean;
  overview: Book[];
  statsGenre: Genre[];
  statsGenreApi: ApiResponseBookStatsGenre | null;
  statsLanguage: Language[];
  statsLanguageApi: ApiResponseBookStatsLanguage | null;
  statsYearPublished: YearPublished[];
  statsYearPublishedApi: ApiResponseBookStatsYearPublished | null;
  ui: UI<Book, Filter>;
}
