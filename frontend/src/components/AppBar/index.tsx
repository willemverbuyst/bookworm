import { ReactElement } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import { useNavigate } from 'react-router-dom'
import { useAppState, useActions } from '../../overmind'

const ButtonAppBar: React.FC = (): ReactElement => {
	// const navigate = useNavigate()
	const { isLoggedIn } = useAppState()
	const { logoutUser } = useActions()
	// const gotoLogin = () => navigate('/login')
	const pages = ['books', 'authors', 'feedback']
	// const goto = (page: string) => navigate(`/${page}`)
	const logOut = () => logoutUser()

	const displayButton = (): ReactElement =>
		isLoggedIn ? (
			<Button color="inherit" onClick={logOut}>
				log out
			</Button>
		) : (
			<Button color="inherit">log in</Button>
		)

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
