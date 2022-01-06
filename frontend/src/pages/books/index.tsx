import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import TableForOverview from '../../components/Table'
import { useActions, useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import BookPieChart from '../../components/PieChart'

const Books: React.FC = (): ReactElement => {
	const { fetchAllBooks } = useActions()
	const { allBooks, booksGroupedByLanguage, isLoggedIn } = useAppState()
	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	useEffect(() => {
		let abortController = new AbortController()
		if (!allBooks && isLoggedIn) {
			fetchAllBooks()
		}
		return () => {
			abortController.abort()
		}
	})

	return isLoggedIn ? (
		<BasicTabs
			overview={
				<Box>
					<h1 className="title">Books</h1>
					{allBooks ? (
						<TableForOverview rows={allBooks} columns={columns} />
					) : (
						<p>No books</p>
					)}
				</Box>
			}
			statistics={
				<Box>
					<h1 className="title">Books</h1>
					{booksGroupedByLanguage ? (
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
	) : (
		<p>you are not logged in</p>
	)
}

export default Books
