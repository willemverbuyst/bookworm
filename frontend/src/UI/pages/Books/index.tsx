import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import TableForOverview from '../../components/Table'
import { useAppState } from '../../../business/overmind'
import BookPieChart from '../../components/Charts/PieChart'

const Books: React.FC = (): ReactElement => {
	const { allBooks, booksGroupedByLanguage } = useAppState()
	const [showTable, setShowTable] = useState<boolean>(true)
	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	const displayTable = () => setShowTable(true)

	const displayChart = () => setShowTable(false)

	return (
		<Container>
			<Box sx={{ mt: 3 }} id="title">
				<Typography variant="h2">Books</Typography>
			</Box>
			<Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
					<ButtonGroup variant="outlined" aria-label="outlined button group">
						<Button
							color="secondary"
							variant={showTable ? 'contained' : 'outlined'}
							disableElevation
							onClick={displayTable}
						>
							TABLE
						</Button>
						<Button
							color="secondary"
							variant={!showTable ? 'contained' : 'outlined'}
							disableElevation
							onClick={displayChart}
						>
							CHART
						</Button>
					</ButtonGroup>
				</Box>
				{showTable ? (
					<Box>
						{allBooks ? (
							<TableForOverview
								rows={allBooks}
								columns={columns}
								title="overview of books"
							/>
						) : (
							<p>No books</p>
						)}
					</Box>
				) : (
					<Box>
						{booksGroupedByLanguage ? (
							<BookPieChart
								colors={colors}
								data={booksGroupedByLanguage}
								dataKey="number"
								nameKey="language"
								title="books grouped by languages"
							/>
						) : (
							<p>No books</p>
						)}
					</Box>
				)}
			</Box>
		</Container>
	)
}

export default Books
