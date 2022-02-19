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
	const response = await effects.api.getUser(email, password)
	if (response.status === 'success') {
		state.isLoggedIn = true
		state.user = response.data
		state.apiError.loginForm = ''
		state.apiSuccess.loginForm = response.message
		localStorage.setItem('token', 'access_token')
	} else {
		state.apiError.loginForm = response.message
		state.apiSuccess.loginForm = ''
	}
}

export const logoutUser = ({ state }: Context) => {
	localStorage.removeItem('token')
	state.isLoggedIn = false
	state.user = null
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
		state.apiError.reviewForm = ''
		state.apiSuccess.reviewForm = response.message
	} else {
		state.apiError.reviewForm = response.message
		state.apiSuccess.reviewForm = ''
	}
}
