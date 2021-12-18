import { Context } from '.';

export const loginUser = ({ state }: Context) => {
  state.isLoggedIn = true;
};
