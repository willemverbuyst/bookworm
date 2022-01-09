import {
	IonCol,
	IonContent,
	IonGrid,
	IonPage,
	IonRow,
	IonText,
} from '@ionic/react'
import React, { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'
import { useAppState } from '../../overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<IonPage>
			<ToolBar title="Feedback" showLoginBtn={true} />
			<IonContent>
				<IonGrid>
					{isLoggedIn ? (
						<IonText>
							<h4>Give some feedback</h4>
						</IonText>
					) : (
						<IonRow justify-content-center>
							<IonCol class="ion-text-center">
								<IonText>
									<h4>you are not logged in</h4>
								</IonText>
							</IonCol>
						</IonRow>
					)}
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Feedback
