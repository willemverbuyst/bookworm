import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useActions, useAppState } from '../../overmind'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'
import BarChartForStatistics from '../../components/Charts/BarChart'

const Authors: React.FC = (): ReactElement => {
	const { authorsApi } = useAppState()
	const { fetchAllAuthors } = useActions()

	useEffect(() => {
		if (!authorsApi) {
			fetchAllAuthors()
		}
	})

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

	return (
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
	)
}

export default Authors
