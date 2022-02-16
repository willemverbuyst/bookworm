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
			<h3>Grouped by languages</h3>

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
						{data.map((entry, index) => (
							<Cell
								key={`cell-${entry.text}`}
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
