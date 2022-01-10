import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import Box from '@mui/material/Box'
import { Bar, BarChart } from 'recharts'

interface IProps {
	data: Array<{ [key: string]: string | number }>
	dataKey: string
}

const BarChartForStatistics = ({ data, dataKey }: IProps) => {
	return data ? (
		<IonGrid>
			<IonRow>
				<IonCol className="ion-text-center">
					<IonText>
						<h3>Written books by authors</h3>
					</IonText>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
						}}
					>
						<BarChart width={600} height={400} data={data}>
							<Bar dataKey={dataKey} fill="#FFBB28"></Bar>
						</BarChart>
					</Box>
				</IonCol>
			</IonRow>
		</IonGrid>
	) : null
}

export default BarChartForStatistics
