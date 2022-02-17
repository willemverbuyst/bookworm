import React, { ReactElement, useEffect } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useAppState, useActions } from '../../../business/overmind'
import ToolBar from '../../components/AppBar'

type Inputs = {
	email: string
	password: string
}

const Login: React.FC = (): ReactElement => {
	const navigate = useNavigate()
	const { control, handleSubmit } = useForm<Inputs>()
	const { loginUser } = useActions()

	const { appErrors, isLoggedIn } = useAppState()

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/home')
		}
	}, [isLoggedIn])

	const onSubmit: SubmitHandler<Inputs> = async data => {
		await loginUser(data)
		if (!appErrors.loginForm) {
			navigate('/home')
		}
	}

	const displayErrorMessage = () => (
		<p className="error">{appErrors.loginForm}</p>
	)

	return (
		<>
			<ToolBar />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						overflow: 'hidden',
						margin: 'auto',
					}}
				>
					<Box sx={{ marginTop: 3 }}>
						<Controller
							name="email"
							control={control}
							rules={{ required: true }}
							defaultValue=""
							render={({ field }) => (
								<TextField
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...field}
									id="outlined-required"
									label="email"
									type="email"
								/>
							)}
						/>
					</Box>
					<Box sx={{ marginTop: 3 }}>
						<Controller
							name="password"
							control={control}
							rules={{ required: true }}
							defaultValue=""
							render={({ field }) => (
								<TextField
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...field}
									id="outlined-required"
									label="password"
									type="password"
								/>
							)}
						/>
					</Box>
					<Box sx={{ marginTop: 3 }}>
						<Button type="submit" variant="contained">
							LOG IN
						</Button>
					</Box>
				</Box>
			</form>

			{appErrors.loginForm ? displayErrorMessage() : null}
		</>
	)
}

export default Login
