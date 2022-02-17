import { Box, Typography } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useActions, useAppState } from '../../../business/overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'
import ToolBar from '../../components/AppBar'

const Authors: React.FC = (): ReactElement => {
	const { fetchAllAuthors } = useActions()
	const { allAuthors, authorForStatistics } = useAppState()

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	useEffect(() => {
		if (!allAuthors || !authorForStatistics) {
			fetchAllAuthors()
		}
	}, [allAuthors, authorForStatistics, fetchAllAuthors])

	return (
		<Box>
			<ToolBar />
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h1">Authors</Typography>
			</Box>
			<Box>
				<BasicTabs
					overview={
						<Box>
							{allAuthors ? (
								<TableForOverview rows={allAuthors} columns={columns} />
							) : (
								<p>No Authors</p>
							)}
						</Box>
					}
					statistics={
						<Box>
							{authorForStatistics ? (
								<BarChartForStatistics
									data={authorForStatistics}
									dataKey="books_written"
								/>
							) : (
								<p>No Authors</p>
							)}
						</Box>
					}
				/>
			</Box>
		</Box>
	)
}

export default Authors
