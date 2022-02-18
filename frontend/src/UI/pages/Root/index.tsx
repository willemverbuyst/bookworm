import { Box, Container, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

const Root: React.FC = (): ReactElement => {
	return (
		<Container>
			<Box sx={{ mt: 3 }}>
				<Typography variant="h2">Home</Typography>
			</Box>
			<Box>
				<Box sx={{ m: 5, textAlign: 'center' }}>
					<Typography variant="h3">Welcome!</Typography>
				</Box>
			</Box>
		</Container>
	)
}

export default Root
