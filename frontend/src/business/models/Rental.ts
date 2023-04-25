import { ApiResponse, BaseState, UI } from "./State";

interface Rental {
  id: string;
  rental_date: string;
  return_date: string;
  title: string;
  author: string;
}

interface Duration {
  duration: number;
  total_rentals: number;
}

interface DurationDisplay {
  durationLabel: string;
  duration: number;
  number: number;
}

interface Day {
  number_of_rentals: number;
  number_of_returns: number;
  day_of_the_week: number;
}

interface DayDisplay {
  rentals: number;
  returns: number;
  day: string;
  fullMark: number;
}

interface Filter {
  returned: string;
}

export interface RentalState extends BaseState<Rental> {
  statsDay: DayDisplay[];
  statsDayApi: ApiResponse<Day[]> | null;
  statsDuration: DurationDisplay[];
  statsDurationApi: ApiResponse<Duration[]> | null;
  ui: UI<Rental, Filter>;
}
