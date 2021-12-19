import axios from 'axios';
import { Book } from '../models/Book';

export const api = {
  getAllBooks: async (): Promise<Book[]> => {
    const response = await axios.get(`http://backend:8000/books`);
    console.log(response);

    return response.data;
  },
};
