import { Book } from '../models/Book';

export const api = {
  getUser: async (): Promise<Book[]> => {
    // todo
    const response = await fetch('/books');

    return response.json();
  },
};
