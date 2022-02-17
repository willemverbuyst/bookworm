import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import ToolBar from '../../components/AppBar'

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<Box>
			<ToolBar />
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h1">404</Typography>
			</Box>
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h3">page not found</Typography>
			</Box>
		</Box>
	)
}
export default PageNotFound
