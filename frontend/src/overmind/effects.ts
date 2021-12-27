import axios from 'axios';
import { BookApi } from '../models/Book';
import { UserApi } from '../models/User';

export const api = {
  getAllBooks: async (): Promise<BookApi> => {
    const response = await axios.get(`http://0.0.0.0:8000/books`);
    console.log(response.data);
    return response.data;
  },

  getUser: async (email: string, password: string): Promise<UserApi> => {
    const response = await axios.post(`http://0.0.0.0:8000/login`, {
      email,
      password,
    });
    return response.data;
  },
};
