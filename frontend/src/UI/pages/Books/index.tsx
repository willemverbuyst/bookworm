import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import TableForOverview from '../../components/Table'
import { useActions, useAppState } from '../../../business/overmind'
import BasicTabs from '../../components/BasicTabs'
import BookPieChart from '../../components/Charts/PieChart'

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
		if ((!allBooks || !booksGroupedByLanguage) && isLoggedIn) {
			fetchAllBooks()
		}
	}, [allBooks, booksGroupedByLanguage, isLoggedIn, fetchAllBooks])

	return isLoggedIn ? (
		<BasicTabs
			overview={
				<Box>
					{allBooks ? (
						<TableForOverview rows={allBooks} columns={columns} />
					) : (
						<p>No books</p>
					)}
				</Box>
			}
			statistics={
				<Box>
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
		<h3>you are not logged in</h3>
	)
}

export default Books
