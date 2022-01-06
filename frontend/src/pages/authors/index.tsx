import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { fetchAllAuthors } = useActions()
	const { allAuthors, authorForStatistics, isLoggedIn } = useAppState()

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	useEffect(() => {
		if ((!allAuthors || !authorForStatistics) && isLoggedIn) {
			fetchAllAuthors()
		}
	}, [allAuthors, authorForStatistics, isLoggedIn, fetchAllAuthors])

	return isLoggedIn ? (
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
	) : (
		<p>you are not logged in</p>
	)
}

export default Authors
