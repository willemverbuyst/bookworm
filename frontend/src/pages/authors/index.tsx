import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { authorsApi, isLoggedIn } = useAppState()

	const allAuthors = authorsApi
		? Object.values([...authorsApi.data])
				.map(author => ({ ...author }))
				.sort((author1, author2) =>
					('' + author1.name).localeCompare(author2.name)
				)
		: null

	const authorForStatistics = authorsApi
		? [...authorsApi.data].map(author => ({
				name: author.name,
				books_written: author.books_written,
		  }))
		: null

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
