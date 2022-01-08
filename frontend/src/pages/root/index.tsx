import {
	IonContent,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { ReactElement } from 'react'

const Root: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<IonToolbar>
				<IonTitle>Home</IonTitle>
			</IonToolbar>
			<IonContent>
				<IonText>
					<h4>Welcome!</h4>
				</IonText>
			</IonContent>
		</IonPage>
	)
}

export default Root
