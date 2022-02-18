import { Box, Container, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'

const Review: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<Container>
			<Box sx={{ mt: 3 }}>
				<Typography variant="h2">Review</Typography>
			</Box>
			<Box>
				<Typography variant="h3" sx={{ textAlign: 'center' }}>
					{isLoggedIn ? 'Add review' : 'you are not logged in'}
				</Typography>
			</Box>
		</Container>
	)
}

export default Review
