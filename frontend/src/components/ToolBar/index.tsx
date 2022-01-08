import { IonButton, IonTitle, IonToolbar } from '@ionic/react'
import { ReactElement } from 'react'

interface IProps {
	title: string
}

const ToolBar: React.FC<IProps> = ({ title }: IProps): ReactElement => {
	return (
		<IonToolbar>
			<IonTitle>{title}</IonTitle>
			<IonButton slot="end">test</IonButton>
		</IonToolbar>
	)
}

export default ToolBar
