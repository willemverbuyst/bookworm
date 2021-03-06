import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import { useAppState } from '../../../business/overmind'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { allAuthors, authorForStatistics } = useAppState()
	const [showTable, setShowTable] = useState<boolean>(true)
	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	const displayTable = () => setShowTable(true)

	const displayChart = () => setShowTable(false)

	return (
		<Container>
			<Box sx={{ mt: 3 }} id="title">
				<Typography variant="h2">Authors</Typography>
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
						{allAuthors ? (
							<TableForOverview
								rows={allAuthors}
								columns={columns}
								title="overview of authors"
							/>
						) : (
							<p>No Authors</p>
						)}
					</Box>
				) : (
					<Box>
						{authorForStatistics ? (
							<BarChartForStatistics
								data={authorForStatistics}
								dataKey="books_written"
								title="amount of books written books by authors"
							/>
						) : (
							<p>No Authors</p>
						)}
					</Box>
				)}
			</Box>
		</Container>
	)
}

export default Authors
