import { AuthorApi } from '../models/Author'
import { BookApi } from '../models/Book'
import { User } from '../models/User'

export interface State {
	isLoggedIn: boolean
	user: User | null
	authorsApi: AuthorApi | null
	booksApi: BookApi | null
	appErrors: { loginForm: string }
}
