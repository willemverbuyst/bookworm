import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import { TableWithAllBooks } from './table'
import { ChartWithBooks } from './chart'

const Books: React.FC = (): ReactElement => {
	const [showTable, setShowTable] = useState<boolean>(true)

	const displayTable = () => setShowTable(true)

	const displayChart = () => setShowTable(false)

	return (
		<Container>
			<Box sx={{ mt: 3 }} id="title">
				<Typography variant="h2">Books</Typography>
			</Box>
			<Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
					<ButtonGroup variant="outlined" aria-label="outlined button group">
						<Button
							color="secondary"
							variant={showTable ? 'contained' : 'outlined'}
							disableElevation
							onClick={displayTable}
						>
							TABLE
						</Button>
						<Button
							color="secondary"
							variant={!showTable ? 'contained' : 'outlined'}
							disableElevation
							onClick={displayChart}
						>
							CHART
						</Button>
					</ButtonGroup>
				</Box>
				{showTable ? <TableWithAllBooks /> : <ChartWithBooks />}
			</Box>
		</Container>
	)
}

export default Books
