import axios from 'axios';
import { Book } from '../models/Book';

export const api = {
  getAllBooks: async (): Promise<Book[]> => {
    const response = await axios.get(`http://0.0.0.0:8000/books`);

    return response.data.data;
  },
};
