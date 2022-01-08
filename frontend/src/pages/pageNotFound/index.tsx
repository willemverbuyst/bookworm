import { IonContent, IonPage, IonText } from '@ionic/react'
import { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<IonPage>
			<ToolBar title="404" showLoginBtn={false} />
			<IonContent>
				<IonText>
					<h4>page not found</h4>
				</IonText>
			</IonContent>
		</IonPage>
	)
}
export default PageNotFound
