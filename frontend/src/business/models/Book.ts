export interface Book {
	id: string
	title: string
	language: string
	author: string
	year: number
	read: boolean
}

export interface BookApi {
	status: string
	data: {
		id: string
		title: string
		language: string
		author: string
		year: number
		read: number
	}[]
	message: string
}
