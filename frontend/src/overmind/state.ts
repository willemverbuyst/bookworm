import { derived } from 'overmind'
import { State } from './interfaces'

export const state: State = {
	isLoggedIn: false,
	user: null,
	authorsApi: null,
	booksApi: null,
	allAuthors: derived((state: State) =>
		state.authorsApi && state.authorsApi.data
			? [...Object.values(state.authorsApi.data)].sort((author1, author2) =>
					('' + author1.name).localeCompare(author2.name)
			  )
			: null
	),
	allBooks: derived((state: State) =>
		state.booksApi && state.booksApi.data
			? [
					...Object.values(state.booksApi.data).map(book => ({
						...book,
						read: book.read === 1 ? true : false,
					})),
			  ].sort((book1, book2) => ('' + book1.title).localeCompare(book2.title))
			: null
	),
	appErrors: { loginForm: '' },
}
