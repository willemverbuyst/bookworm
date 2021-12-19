import { Context } from '.';

export const loginUser = ({ state }: Context) => {
  state.isLoggedIn = true;
};

export const logoutUser = ({ state }: Context) => {
  state.isLoggedIn = false;
};

export const fetchAllBooks = async ({ effects, state }: Context) => {
  const allBooks = await effects.api.getAllBooks();
  state.books = allBooks;
};
