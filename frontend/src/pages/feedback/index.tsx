import { IonContent, IonPage, IonText } from '@ionic/react'
import React, { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'
import { useAppState } from '../../overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<IonPage>
			<ToolBar title="Feedback" />
			<IonContent>
				{isLoggedIn ? (
					<></>
				) : (
					<IonText>
						<h4>you are not logged in</h4>
					</IonText>
				)}
			</IonContent>
		</IonPage>
	)
}

export default Feedback
