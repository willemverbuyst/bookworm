import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<Box>
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h2">Feedback</Typography>
			</Box>
			<Box>
				<Typography variant="h3" sx={{ textAlign: 'center' }}>
					{isLoggedIn ? 'Give some feedback' : 'you are not logged in'}
				</Typography>
			</Box>
		</Box>
	)
}

export default Feedback
