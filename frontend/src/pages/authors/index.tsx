import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useAppState, useActions } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { allAuthors, authorForStatistics, isLoggedIn } = useAppState()
	const { fetchAllAuthors } = useActions()

	// useEffect(() => {
	// 	if (isLoggedIn) {
	// 		fetchAllAuthors()
	// 	}
	// })

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	return isLoggedIn ? (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Authors</h1>
						{allAuthors ? (
							<TableForOverview rows={allAuthors} columns={columns} />
						) : (
							<p>No Authors</p>
						)}
					</Box>
				}
				statistics={
					<Box>
						<h1 className="title">Authors</h1>
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
		</>
	) : (
		<p>You are not logged in!</p>
	)
}

export default Authors
