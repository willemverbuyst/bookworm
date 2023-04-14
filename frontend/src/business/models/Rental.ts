import { ApiResponse, BaseState, UITable } from "./State";

export interface Rental {
  id: string;
  rental_date: string;
  return_date: string;
  title: string;
  author: string;
}

export interface RentalStatsDuration {
  duration: number;
  total_rentals: number;
}

export interface RentalState extends BaseState<Rental> {
  statsDuration: Array<{
    durationLabel: string;
    duration: number;
    number: number;
  }> | null;
  statsDurationApi: ApiResponse<Array<RentalStatsDuration>> | null;
  ui: {
    table: UITable<
      Rental,
      {
        returned: string;
      }
    >;
  };
}
