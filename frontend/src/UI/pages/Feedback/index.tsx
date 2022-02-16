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
import { useAppState } from '../../../business/overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<IonPage>
			<ToolBar showLoginBtn />
			<IonContent>
				<IonGrid>
					{isLoggedIn ? (
						<IonRow>
							<IonCol class="ion-text-center">
								<IonText>
									<h3>Give some feedback</h3>
								</IonText>
							</IonCol>
						</IonRow>
					) : (
						<IonRow justify-content-center>
							<IonCol class="ion-text-center">
								<IonText>
									<h3>you are not logged in</h3>
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
