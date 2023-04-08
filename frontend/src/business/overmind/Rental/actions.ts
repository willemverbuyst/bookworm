/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getRentals = async (
  { effects, state }: Context,
  { limit, page, filter }: { limit: number; page: number; filter: string }
) => {
  state.app.isLoading = true;
  const rentals = await effects.rental.api.getRentals({ limit, page, filter });
  state.rental.getAllApi = rentals;
  state.app.isLoading = false;
};

export const getRentalStatsDuration = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const rentalStats = await effects.rental.api.getRentalStatsDuration();
  state.rental.statsDurationApi = rentalStats;
  state.app.isLoading = false;
};
