import { State } from './interfaces'

export const state: State = {
	isLoggedIn: false,
	user: null,
	authorsApi: null,
	booksApi: null,
	appErrors: { loginForm: '' },
}
