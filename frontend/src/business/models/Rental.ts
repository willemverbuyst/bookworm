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

interface Filter {
  returned: string;
}

export interface RentalState extends BaseState<Rental> {
  statsDuration: DurationDisplay[] | null;
  statsDurationApi: ApiResponse<Duration[]> | null;
  ui: UI<Rental, Filter>;
}
