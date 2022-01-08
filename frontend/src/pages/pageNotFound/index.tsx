import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { ReactElement } from 'react'

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<IonToolbar>
				<IonTitle>404</IonTitle>
			</IonToolbar>
			<IonContent>
				<h4>page not found</h4>
			</IonContent>
		</IonPage>
	)
}
export default PageNotFound
