import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import TableForOverview from '../../components/Table'
import { useAppState } from '../../../business/overmind'
import BasicTabs from '../../components/BasicTabs'
import BookPieChart from '../../components/Charts/PieChart'

const Books: React.FC = (): ReactElement => {
	const { allBooks, booksGroupedByLanguage } = useAppState()
	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	return (
		<Box>
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h2">Books</Typography>
			</Box>
			<Box>
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
			</Box>
		</Box>
	)
}

export default Books
