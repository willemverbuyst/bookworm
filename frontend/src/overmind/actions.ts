import { Context } from '.';

export const loginUser = async ({ effects, state }: Context) => {
  state.isLoggedIn = true;
  const allBooks = await effects.api.getAllBooks();
  state.books = allBooks;
};

export const logoutUser = ({ state }: Context) => {
  state.isLoggedIn = false;
  state.books = [];
};

// export const fetchAllBooks = async ({ effects, state }: Context) => {
//   const allBooks = await effects.api.getAllBooks();
//   state.books = allBooks;
// };
