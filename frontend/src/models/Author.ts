export interface Author {
	id: string
	name: string
	books_written: string
}

export interface AuthorApi {
	status: string
	data: Author[]
	message: string
}
