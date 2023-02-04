import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import TableForOverview from '../../components/Table'
import { useAppState } from '../../../business/overmind'

export const TableWithAllBooks: React.FC = (): ReactElement => {
	const data = useAppState(state => state.allBooks)

	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]

	return (
		<Box>
			{data ? (
				<TableForOverview
					rows={data}
					columns={columns}
					title="overview of books"
				/>
			) : (
				<p>No books</p>
			)}
		</Box>
	)
}
