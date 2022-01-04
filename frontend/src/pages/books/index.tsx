import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import TableForOverview from '../../components/Table'
import { useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import BookPieChart from '../../components/PieChart'

const Books: React.FC = (): ReactElement => {
	const { allBooks, booksGroupedByLanguage, isLoggedIn } = useAppState()
	// const { fetchAllBooks } = useActions()

	// useEffect(() => {
	// 	if (!booksApi) {
	// 		fetchAllBooks()
	// 	}
	// })
	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	// const allBooks = booksApi
	// 	? Object.values([...booksApi.data])
	// 			.map(book => ({
	// 				...book,
	// 				read: book.read === 1 ? true : false,
	// 			}))
	// 			.sort((book1, book2) => ('' + book1.title).localeCompare(book2.title))
	// 	: null

	// const booksGroupedByLanguage = booksApi
	// 	? Object.entries(
	// 			[...booksApi.data].reduce((rv: { [key: string]: number }, book) => {
	// 				rv[book.language] = rv[book.language] + 1 || 1
	// 				return rv
	// 			}, {})
	// 	  ).map(([key, value]) => ({
	// 			language: key,
	// 			number: value,
	// 	  }))
	// 	: null

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Books</h1>
						{allBooks && isLoggedIn ? (
							<TableForOverview rows={allBooks} columns={columns} />
						) : (
							<p>No books</p>
						)}
					</Box>
				}
				statistics={
					<Box>
						<h1 className="title">Books</h1>
						{booksGroupedByLanguage && isLoggedIn ? (
							<BookPieChart
								colors={colors}
								data={booksGroupedByLanguage}
								dataKey="number"
								nameKey="language"
							/>
						) : (
							<p>No books</p>
						)}
					</Box>
				}
			/>
		</>
	)
}

export default Books
