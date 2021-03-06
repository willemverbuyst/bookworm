import axios from 'axios'
import { AuthorApi } from '../models/Author'
import { BookApi } from '../models/Book'
import { ReviewApi } from '../models/ReviewApi'
import { UserApi } from '../models/User'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const api = {
	getAllAuthors: async (): Promise<AuthorApi> => {
		const response = await axios.get(`${BACKEND_URL}/authors`)
		return response.data
	},

	getAllBooks: async (): Promise<BookApi> => {
		const response = await axios.get(`${BACKEND_URL}/books`)
		return response.data
	},

	getUser: async (email: string, password: string): Promise<UserApi> => {
		const response = await axios.post(`${BACKEND_URL}/user/login`, {
			email,
			password,
		})
		return response.data
	},
	postReview: async (
		author: string,
		bookTitle: string,
		review: string,
		rating: number | null,
		token: string
	): Promise<ReviewApi> => {
		const response = await axios.post(
			`${BACKEND_URL}/reviews`,
			{
				author,
				book_title: bookTitle,
				review,
				rating,
			},
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		console.log('response', response)
		return response.data
	},
}
