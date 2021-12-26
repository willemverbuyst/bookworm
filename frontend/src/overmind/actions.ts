import { Context } from '.';

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginUser = async (
  { effects, state }: Context,
  { email, password }: LoginCredentials
) => {
  if (email === 'a@a.com' && password === 'a') {
    state.isLoggedIn = true;
    state.userName = 'a';
    state.appErrors.loginForm = '';
    localStorage.setItem('token', 'access_token');
    const allBooks = await effects.api.getAllBooks();
    state.booksApi = allBooks;
  } else {
    state.appErrors.loginForm = 'User with this email and password not found!';
  }
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
