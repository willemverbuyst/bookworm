import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Cell, Legend, Pie, PieChart } from 'recharts'
import { useActions } from '../../overmind'

const BookPieChart = () => {
	const { getBooksGroupedByLanuage } = useActions()
	const booksGroupedByLanguage = getBooksGroupedByLanuage()
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	return booksGroupedByLanguage ? (
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
						data={booksGroupedByLanguage}
						dataKey="number"
						nameKey="language"
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill="#0088FE"
						label
					>
						{booksGroupedByLanguage.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</Box>
		</>
	) : null
}

export default BookPieChart
