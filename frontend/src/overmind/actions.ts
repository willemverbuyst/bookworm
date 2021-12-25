import { Context } from '.';

export const loginUser = async ({ effects, state }: Context) => {
  state.isLoggedIn = true;
  localStorage.setItem('token', 'access_token');
  const allBooks = await effects.api.getAllBooks();
  state.booksApi = allBooks;
};

export const logoutUser = ({ state }: Context) => {
  state.isLoggedIn = false;
  localStorage.removeItem('token');

  state.booksApi = [];
};

export const onInitializeOvermind = ({ state }: Context) => {
  const token = localStorage.getItem('token');
  if (token) {
    state.isLoggedIn = true;
  }
};
