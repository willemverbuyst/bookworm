import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<Box>
			<Box sx={{ mt: 3, ml: 3 }}>
				<Typography variant="h2">404</Typography>
			</Box>
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h3">page not found</Typography>
			</Box>
		</Box>
	)
}
export default PageNotFound
