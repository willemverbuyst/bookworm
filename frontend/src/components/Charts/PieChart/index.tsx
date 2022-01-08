import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { ReactElement } from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts'

interface IProps {
	data: { [key: string]: string | number }[]
	colors: string[]
	dataKey: string
	nameKey: string
}

const BookPieChart: React.FC<IProps> = ({
	data,
	colors,
	dataKey,
	nameKey,
}: IProps): ReactElement => {
	return (
		<>
			<Typography>Grouped by languages</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<PieChart width={400} height={400}>
					<Legend verticalAlign="bottom" height={36} />
					<Pie
						data={data}
						dataKey={dataKey}
						nameKey={nameKey}
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill="#0088FE"
						label
					>
						{data.map((_entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={colors[index % colors.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</Box>
		</>
	)
}

export default BookPieChart
