import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import ToolBar from '../../components/AppBar'

const Root: React.FC = (): ReactElement => {
	return (
		<Box>
			<ToolBar />
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h1">Home</Typography>
			</Box>
			<Box>
				<Box sx={{ m: 5, textAlign: 'center' }}>
					<Typography variant="h3">Welcome!</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Root
