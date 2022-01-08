import { IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { ReactElement } from 'react'

const Root: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<IonToolbar>
				<IonTitle>Home</IonTitle>
			</IonToolbar>
		</IonPage>
	)
}

export default Root
