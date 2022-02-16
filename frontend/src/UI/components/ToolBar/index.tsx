import React, { ReactElement } from 'react'
import { IonButton, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import { useActions } from '../../../business/overmind'

const ToolBar: React.FC = (): ReactElement => {
	const history = useHistory()
	const { logoutUser } = useActions()
	const logOut = () => {
		logoutUser()
		history.push('/login')
	}

	return (
		<IonToolbar>
			<IonTitle slot="start">BOOKWORM</IonTitle>
			<IonButton fill="clear" slot="end" onClick={logOut}>
				LOG OUT
			</IonButton>
		</IonToolbar>
	)
}

export default ToolBar
