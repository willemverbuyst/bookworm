import { z } from "zod";
import { UI } from "./State";

export const ApiResponseBook = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      title: z.string(),
      author: z.string(),
      year_published: z.string(),
      genre: z.string(),
      language: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseBook = z.infer<typeof ApiResponseBook>;
interface Book {
  id: string;
  title: string;
  author: string;
  "year published": string;
  genre: string;
  language: string;
}

export const ApiResponseStatsGenre = z.object({
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

export type ApiResponseStatsGenre = z.infer<typeof ApiResponseStatsGenre>;

interface Genre {
  genre: string;
  numberOfBooks: number;
}

export const ApiResponseStatsLanguage = z.object({
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

export type ApiResponseStatsLanguage = z.infer<typeof ApiResponseStatsLanguage>;

interface Language {
  language: string;
  numberOfBooks: number;
}

export const ApiResponseStatsYearPublished = z.object({
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

export type ApiResponseStatsYearPublished = z.infer<
  typeof ApiResponseStatsYearPublished
>;

interface YearPublished {
  yearPublished: number;
  numberOfBooks: number;
}

interface Filter {
  genre: string;
  name_of_language: string;
}

export interface BookState {
  getAllApi: ApiResponseBook | null;
  isLoading: boolean;
  overview: Book[];
  statsGenre: Genre[];
  statsGenreApi: ApiResponseStatsGenre | null;
  statsLanguage: Language[];
  statsLanguageApi: ApiResponseStatsLanguage | null;
  statsYearPublished: YearPublished[];
  statsYearPublishedApi: ApiResponseStatsYearPublished | null;
  ui: UI<Book, Filter>;
}
