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

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<ToolBar title="404" showLoginBtn={false} />
			<IonContent>
				<IonGrid>
					<IonRow justify-content-center>
						<IonCol class="ion-text-center">
							<IonText>
								<h3>page not found</h3>
							</IonText>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}
export default PageNotFound
