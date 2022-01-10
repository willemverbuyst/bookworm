import {
	IonCol,
	IonContent,
	IonGrid,
	IonPage,
	IonRow,
	IonText,
} from '@ionic/react'
import { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'
import { useAppState } from '../../../business/overmind'

const Root: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<IonPage>
			<ToolBar title="Home" showLoginBtn={true} />
			<IonContent>
				<IonGrid>
					{isLoggedIn ? (
						<IonRow justify-content-center>
							<IonCol class="ion-text-center">
								<IonText>
									<h3>Welcome!</h3>
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

export default Root
