import React from 'react'
import Box from '@mui/material/Box'
import { Bar, BarChart } from 'recharts'

interface IProps {
	data: Array<{ [key: string]: string | number }>
	dataKey: string
}

const BarChartForStatistics = ({ data, dataKey }: IProps) => {
	return data ? (
		<>
			<h3>Written books by authors</h3>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<BarChart width={600} height={400} data={data}>
					<Bar dataKey={dataKey} fill="#FFBB28" />
				</BarChart>
			</Box>
		</>
	) : null
}

export default BarChartForStatistics
