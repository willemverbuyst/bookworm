import axios from 'axios'
import { AuthorApi } from '../models/Author'
import { BookApi } from '../models/Book'
import { UserApi } from '../models/User'

export const api = {
	getAllAuthors: async (): Promise<AuthorApi> => {
		const response = await axios.get(`http://localhost:8000/authors`)
		return response.data
	},

	getAllBooks: async (): Promise<BookApi> => {
		const response = await axios.get(`http://localhost:8000/books`)
		return response.data
	},

	getUser: async (email: string, password: string): Promise<UserApi> => {
		const response = await axios.post(`http://localhost:8000/login`, {
			email,
			password,
		})
		return response.data
	},
}
