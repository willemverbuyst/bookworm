import axios from 'axios';
import { BookApi } from '../models/Book';

export const api = {
  getAllBooks: async (): Promise<BookApi[]> => {
    const response = await axios.get(`http://0.0.0.0:8000/books`);

    return response.data.data;
  },
};
