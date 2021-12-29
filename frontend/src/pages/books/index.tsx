import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import TableForOverview from '../../components/Table'
import { useAppState, useActions } from '../../overmind'
import { useNavigate } from 'react-router-dom'
import BasicTabs from '../../components/BasicTabs'
import BookPieChart from '../../components/PieChart'

const Books: React.FC = (): ReactElement => {
	const navigate = useNavigate()
	const { allBooks, isLoggedIn } = useAppState()
	const { fetchAllBooks } = useActions()

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/')
		}
	})

	useEffect(() => {
		if (!allBooks) {
			fetchAllBooks()
		}
	})

	const columns = [
		{ field: 'title', headerName: 'title', width: 450 },
		{ field: 'language', headerName: 'language', width: 100 },
		{ field: 'author', headerName: 'author', width: 250 },
		{ field: 'year', headerName: 'year', width: 150 },
		{ field: 'read', headerName: 'read', width: 150 },
	]

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Books</h1>
						{allBooks ? (
							<TableForOverview rows={allBooks} columns={columns} />
						) : (
							<p>No books</p>
						)}
					</Box>
				}
				statistics={
					<Box>
						<h1 className="title">Books</h1>
						<BookPieChart />
					</Box>
				}
			/>
		</>
	)
}

export default Books
