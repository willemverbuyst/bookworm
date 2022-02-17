import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { Bar, BarChart } from 'recharts'

interface IProps {
	data: Array<{ [key: string]: string | number }>
	dataKey: string
	title: string
}

const BarChartForStatistics: React.FC<IProps> = ({
	data,
	dataKey,
	title,
}: IProps): ReactElement | null => {
	return data ? (
		<Box>
			<Box sx={{ textAlign: 'center', mb: 3 }}>
				<Typography variant="overline">{title}</Typography>
			</Box>
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
		</Box>
	) : null
}

export default BarChartForStatistics
