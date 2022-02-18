import React, { ReactElement } from 'react'
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridToolbar,
} from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

interface IProps {
	rows: GridRowsProp
	columns: GridColDef[]
	title: string
}

const TableForOverview: React.FC<IProps> = ({
	rows,
	columns,
	title,
}: IProps): ReactElement => {
	const [pageSize, setPageSize] = React.useState(10)

	const width = columns.reduce((rv, column): number => {
		return rv + (column.width ? column.width : 0)
	}, 10)

	return (
		<Box>
			<Box sx={{ textAlign: 'center', mb: 3 }}>
				<Typography variant="overline">{title}</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					<div style={{ height: 700, width }}>
						<DataGrid
							rows={rows}
							columns={columns}
							components={{
								Toolbar: GridToolbar,
							}}
							sx={{ border: 'none' }}
							pageSize={pageSize}
							onPageSizeChange={newPage => setPageSize(newPage)}
							rowsPerPageOptions={[10, 15, 20, 25]}
							pagination
						/>
					</div>
				</div>
			</Box>
		</Box>
	)
}

export default TableForOverview
