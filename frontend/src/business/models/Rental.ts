export interface Rental {
  id: string;
  rental_date: string;
  return_date: string;
  title: string;
  author: string;
}

export interface RentalApi {
  status: string;
  data: Rental[];
  message: string;
  total_number_of_rentals: number;
  result: number;
}

export interface RentalStatsDuration {
  duration: number;
  total_rentals: number;
}

export interface RentalStatsDurationApi {
  status: string;
  data: Array<RentalStatsDuration>;
  message: string;
}
