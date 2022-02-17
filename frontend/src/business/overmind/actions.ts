/* eslint-disable no-param-reassign */
import { Context } from '.'

interface LoginCredentials {
	email: string
	password: string
}

export const loginUser = async (
	{ effects, state }: Context,
	{ email, password }: LoginCredentials
) => {
	const user = await effects.api.getUser(email, password)
	if (user.status === 'success') {
		state.isLoggedIn = true
		state.user = user.data
		state.appErrors.loginForm = ''
		localStorage.setItem('token', 'access_token')
	} else {
		state.appErrors.loginForm = user.message
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
