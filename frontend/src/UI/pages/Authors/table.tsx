import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'
import TableForOverview from '../../components/Table'

export const TableWithAllAuthors: React.FC = (): ReactElement => {
	const data = useAppState(state => state.allAuthors)

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	return (
		<Box>
			{data ? (
				<TableForOverview
					rows={data}
					columns={columns}
					title="overview of authors"
				/>
			) : (
				<p>No Authors</p>
			)}
		</Box>
	)
}
