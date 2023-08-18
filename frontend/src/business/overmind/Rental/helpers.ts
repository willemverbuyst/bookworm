import { RentalData } from "../../models";

export const returnRentalObject = (rental: RentalData) => ({
  id: rental.id,
  "rental date": rental.rental_date,
  "return date": rental.return_date,
  title: rental.title,
  author: rental.author,
});
