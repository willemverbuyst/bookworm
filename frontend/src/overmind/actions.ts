import { Context } from '.';

export const loginUser = ({ state }: Context) => {
  state.isLoggedIn = true;
};

export const logoutUser = ({ state }: Context) => {
  state.isLoggedIn = false;
};
