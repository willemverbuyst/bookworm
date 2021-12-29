import { AuthorApi, Author } from '../models/Author'
import { BookApi, Book } from '../models/Book'
import { User } from '../models/User'

export interface State {
	isLoggedIn: boolean
	user: User | null
	authorsApi: AuthorApi | null
	booksApi: BookApi | null
	allAuthors: Author[] | null
	allBooks: Book[] | null
	appErrors: { loginForm: string }
}
