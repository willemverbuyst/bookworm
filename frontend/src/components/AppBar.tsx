import { ReactElement } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useActions, useAppState } from '../overmind'
import { useNavigate } from 'react-router-dom'

const ButtonAppBar: React.FC = (): ReactElement => {
	const navigate = useNavigate()
	const { isLoggedIn } = useAppState()
	const { logoutUser } = useActions()

	const logOut = () => {
		logoutUser()
		navigate('/')
	}

	const gotoLogin = () => navigate('/login')

	const displayButton = (): ReactElement =>
		isLoggedIn ? (
			<Button color="inherit" onClick={logOut}>
				log out
			</Button>
		) : (
			<Button color="inherit" onClick={gotoLogin}>
				log in
			</Button>
		)

	const pages = ['home', 'books', 'authors', 'feedback']

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						BOOKWORM
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								onClick={() => console.log('clicl')}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					{displayButton()}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default ButtonAppBar
