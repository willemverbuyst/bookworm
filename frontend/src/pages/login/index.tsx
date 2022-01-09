import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useAppState, useActions } from '../../overmind'
import {
	IonCol,
	IonContent,
	IonGrid,
	IonPage,
	IonRow,
	IonText,
} from '@ionic/react'
import { useHistory } from 'react-router-dom'
import ToolBar from '../../components/ToolBar'

type Inputs = {
	email: string
	password: string
}

const Login: React.FC = () => {
	const history = useHistory()
	const { control, handleSubmit } = useForm<Inputs>()
	const { loginUser } = useActions()
	const { appErrors } = useAppState()

	const onSubmit: SubmitHandler<Inputs> = async data => {
		await loginUser(data)
		if (!appErrors.loginForm) {
			history.push('/home')
		}
	}

	const displayErrorMessage = () => (
		<IonRow>
			<IonCol class="ion-text-center">
				<IonText color="danger">
					<p className="error">{appErrors.loginForm}</p>
				</IonText>
			</IonCol>
		</IonRow>
	)

	return (
		<IonPage>
			<ToolBar title="Login" showLoginBtn={false} />
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
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
						</IonCol>
					</IonRow>
					{appErrors.loginForm ? displayErrorMessage() : null}
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Login
