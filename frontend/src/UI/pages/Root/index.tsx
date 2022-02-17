import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'
import ToolBar from '../../components/AppBar'

const Root: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<Box>
			<ToolBar />
			<Box sx={{ m: 5, textAlign: 'center' }}>
				<Typography variant="h1">Home</Typography>
			</Box>
			<Box>
				{isLoggedIn ? (
					<Box sx={{ m: 5, textAlign: 'center' }}>
						<Typography variant="h3">Welcome!</Typography>
					</Box>
				) : (
					<Box sx={{ m: 5, textAlign: 'center' }}>
						<Typography variant="h3">you are not logged in</Typography>
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default Root
