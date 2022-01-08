import {
	IonContent,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import React, { ReactElement } from 'react'
import { useAppState } from '../../overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<IonPage>
			<IonToolbar>
				<IonTitle>Feedback</IonTitle>
			</IonToolbar>
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
