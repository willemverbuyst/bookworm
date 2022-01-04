import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { allAuthors, authorForStatistics, isLoggedIn } = useAppState()

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Authors</h1>
						{allAuthors && isLoggedIn ? (
							<TableForOverview rows={allAuthors} columns={columns} />
						) : (
							<p>No Authors</p>
						)}
					</Box>
				}
				statistics={
					<Box>
						<h1 className="title">Authors</h1>
						{authorForStatistics && isLoggedIn ? (
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
	)
}

export default Authors
