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
