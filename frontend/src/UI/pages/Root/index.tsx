import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

const Root: React.FC = (): ReactElement => {
	return (
		<Box>
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h2">Home</Typography>
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
