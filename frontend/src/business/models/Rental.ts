import { z } from "zod";
import { UI } from "./State";

export const ApiResponseRental = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      id: z.string(),
      rental_date: z.string(),
      return_date: z.string().nullable(),
      title: z.string(),
      author: z.string(),
    })
    .array(),
  total: z.number(),
  message: z.string(),
});

export type ApiResponseRental = z.infer<typeof ApiResponseRental>;

export interface Rental {
  id: string;
  "rental date": string;
  "return date": string | null;
  title: string;
  author: string;
}

export const ApiResponseRentalStatsDuration = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      duration: z.number(),
      total_rentals: z.number(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseRentalStatsDuration = z.infer<
  typeof ApiResponseRentalStatsDuration
>;

interface Duration {
  durationLabel: string;
  duration: number;
  number: number;
}

export const ApiResponseRentalStatsDay = z.object({
  status: z.string(),
  result: z.number(),
  data: z
    .object({
      number_of_rentals: z.number(),
      number_of_returns: z.number(),
      day_of_the_week: z.number(),
    })
    .array(),
  message: z.string(),
});

export type ApiResponseRentalStatsDay = z.infer<
  typeof ApiResponseRentalStatsDay
>;

interface Day {
  rentals: number;
  returns: number;
  day: string;
  fullMark: number;
}

interface Filter {
  returned: string;
}

export interface RentalState {
  getAllApi: ApiResponseRental | null;
  isLoading: boolean;
  overview: Rental[];
  statsDay: Day[];
  statsDayApi: ApiResponseRentalStatsDay | null;
  statsDuration: Duration[];
  statsDurationApi: ApiResponseRentalStatsDuration | null;
  ui: UI<Rental, Filter>;
}
