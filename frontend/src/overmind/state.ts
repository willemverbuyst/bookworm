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
	booksGroupedByLanguage: derived((state: State) =>
		state.booksApi && state.booksApi.data
			? Object.entries(
					[...state.booksApi.data].reduce(
						(rv: { [key: string]: number }, book) => {
							rv[book.language] = rv[book.language] + 1 || 1
							return rv
						},
						{}
					)
			  ).map(([key, value]) => ({
					language: key,
					number: value,
			  }))
			: null
	),
	authorForStatistics: derived((state: State) =>
		state.authorsApi && state.authorsApi.data
			? [...state.authorsApi.data].map(author => ({
					name: author.name,
					books_written: author.books_written,
			  }))
			: null
	),
	appErrors: { loginForm: '' },
}
