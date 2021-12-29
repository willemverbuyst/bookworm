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
	state.authorsApi = null
	state.allAuthors = null
	state.booksApi = null
	state.allBooks = null
}

export const onInitializeOvermind = ({ state }: Context) => {
	const token = localStorage.getItem('token')
	if (token) {
		state.isLoggedIn = true
	}
}

export const fetchAllBooks = async ({ state, effects }: Context) => {
	const allBooks = await effects.api.getAllBooks()
	state.booksApi = allBooks
}

export const fetchAllAuthors = async ({ state, effects }: Context) => {
	const allBooks = await effects.api.getAllAuthors()
	state.authorsApi = allBooks
}

export const getBooksGroupedByLanuage = ({
	state,
}: Context): { language: string; number: number }[] | null => {
	const books = state.allBooks
	if (books) {
		const reducedBooks = [...books].reduce(
			(rv: { [key: string]: number }, book) => {
				rv[book.language] = rv[book.language] + 1 || 1
				return rv
			},
			{}
		)
		return Object.entries(reducedBooks).map(([key, value]) => ({
			language: key,
			number: value,
		}))
	}
	return null
}
