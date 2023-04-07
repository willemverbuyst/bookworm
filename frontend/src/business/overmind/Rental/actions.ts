/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getRentals = async (
  { effects, state }: Context,
  { limit, page, filter }: { limit: number; page: number; filter: string }
) => {
  const rentals = await effects.rental.api.getRentals({ limit, page, filter });
  state.rental.rentalsApi = rentals;
};

export const getRentalStatsDuration = async ({ effects, state }: Context) => {
  const rentalStats = await effects.rental.api.getRentalStatsDuration();
  state.rental.rentalStatsDurationApi = rentalStats;
};
