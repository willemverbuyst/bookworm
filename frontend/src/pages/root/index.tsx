import { IonContent, IonPage, IonText } from '@ionic/react'
import { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'

const Root: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<ToolBar title="Home" showLoginBtn={true} />
			<IonContent>
				<IonText>
					<h4>Welcome!</h4>
				</IonText>
			</IonContent>
		</IonPage>
	)
}

export default Root
