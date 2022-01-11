import React, { ReactElement } from 'react'
import { IonButton, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import { useAppState, useActions } from '../../../business/overmind'

interface IProps {
	title: string
	showLoginBtn: boolean
}

const ToolBar: React.FC<IProps> = ({
	title,
	showLoginBtn,
}: IProps): ReactElement => {
	const history = useHistory()
	const { isLoggedIn } = useAppState()
	const { logoutUser } = useActions()
	const gotoLogin = () => history.push('/login')
	const logOut = () => logoutUser()

	const displayButton = (): ReactElement =>
		isLoggedIn ? (
			<IonButton fill="clear" slot="end" onClick={logOut}>
				LOG OUT
			</IonButton>
		) : (
			<IonButton fill="clear" slot="end" onClick={gotoLogin}>
				LOG IN
			</IonButton>
		)

	return (
		<IonToolbar>
			<IonTitle>{`BOOKWORM ${title}`}</IonTitle>
			{showLoginBtn ? displayButton() : null}
		</IonToolbar>
	)
}

export default ToolBar
