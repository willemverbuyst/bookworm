import { AuthorApi, Author } from '../models/Author'
import { BookApi, Book } from '../models/Book'
import { User } from '../models/User'

export interface State {
	isLoggedIn: boolean
	user: User | null
	authorsApi: AuthorApi | null
	booksApi: BookApi | null
	allAuthors: Author[] | null
	authorForStatistics: any
	allBooks: Book[] | null
	booksGroupedByLanguage: { language: string; number: number }[] | null
	appErrors: { loginForm: string }
}
