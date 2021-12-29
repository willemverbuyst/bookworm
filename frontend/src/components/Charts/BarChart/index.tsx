import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Bar, BarChart } from 'recharts'

interface IProps {
	data: Array<{ [key: string]: string | number }>
	dataKey: string
}

const BarChartForStatistics = ({ data, dataKey }: IProps) => {
	return data ? (
		<>
			<Typography>Written books by authors</Typography>
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
		</>
	) : null
}

export default BarChartForStatistics
