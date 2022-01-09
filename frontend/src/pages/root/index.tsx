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

const Root: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<ToolBar title="Home" showLoginBtn={true} />
			<IonContent>
				<IonGrid>
					<IonRow justify-content-center>
						<IonCol class="ion-text-center">
							<IonText>
								<h3>Welcome!</h3>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Root
