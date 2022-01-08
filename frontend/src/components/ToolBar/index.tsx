import { IonButton, IonTitle, IonToolbar } from '@ionic/react'
import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppState, useActions } from '../../overmind'

interface IProps {
	title: string
}

const ToolBar: React.FC<IProps> = ({ title }: IProps): ReactElement => {
	const history = useHistory()
	const { isLoggedIn } = useAppState()
	const { logoutUser } = useActions()
	const gotoLogin = () => history.push('/login')
	const logOut = () => {
		logoutUser()
		history.push('/home')
	}

	const displayButton = (): ReactElement =>
		isLoggedIn ? (
			<IonButton slot="end" onClick={logOut}>
				log out
			</IonButton>
		) : (
			<IonButton slot="end" onClick={gotoLogin}>
				log in
			</IonButton>
		)

	return (
		<IonToolbar>
			<IonTitle>{title}</IonTitle>
			{displayButton()}
		</IonToolbar>
	)
}

export default ToolBar
