import React, { ReactElement } from 'react'
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridToolbar,
} from '@mui/x-data-grid'
import { Box } from '@mui/material'

interface IProps {
	rows: GridRowsProp
	columns: GridColDef[]
}

const TableForOverview: React.FC<IProps> = ({
	rows,
	columns,
}: IProps): ReactElement => {
	const [pageSize, setPageSize] = React.useState(10)

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
			<div style={{ display: 'flex', height: '100%' }}>
				<div style={{ height: 700, width: 1110 }}>
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
	)
}

export default TableForOverview
