/* eslint-disable no-param-reassign */
import { Context } from '.'
import { Review } from '../models/ReviewApi'

interface LoginCredentials {
	email: string
	password: string
}

export const loginUser = async (
	{ effects, state }: Context,
	{ email, password }: LoginCredentials
) => {
	state.apiResponse = { message: '', status: undefined }
	const response = await effects.api.getUser(email, password)
	if (response.status === 'success') {
		state.apiResponse = { message: response.message, status: 'success' }
		localStorage.setItem('token', 'access_token')
		state.isLoggedIn = true
		state.user = response.data
	} else {
		state.apiResponse = { message: response.message, status: 'error' }
	}
}

export const logoutUser = ({ state }: Context) => {
	localStorage.removeItem('token')
	state.isLoggedIn = false
	state.user = null
	state.apiResponse = { message: '', status: undefined }
}

export const onInitializeOvermind = async ({ state, effects }: Context) => {
	const allBooks = await effects.api.getAllBooks()
	state.booksApi = allBooks
	const allAuthors = await effects.api.getAllAuthors()
	state.authorsApi = allAuthors
	const token = localStorage.getItem('token')
	if (token) {
		state.isLoggedIn = true
	}
}

export const postReview = async (
	{ state, effects }: Context,
	{ author, bookTitle, review, rating }: Review
) => {
	const response = await effects.api.postReview(
		author,
		bookTitle,
		review,
		rating
	)
	if (response.status === 'success') {
		state.apiResponse = { message: response.message, status: 'success' }
	} else {
		state.apiResponse = { message: response.message, status: 'error' }
	}
}
