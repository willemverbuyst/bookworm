export interface Author {
	id: string
	name: string
	books_written: number
}

export interface AuthorApi {
	status: string
	data: Author[]
	message: string
}
