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

export interface RentalStatsDurationApi {
  status: string;
  data: Array<RentalStatsDuration>;
  message: string;
}
