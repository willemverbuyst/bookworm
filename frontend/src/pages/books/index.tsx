import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import TableWithBooks from '../../components/Table'
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

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Books</h1>
						{allBooks ? <TableWithBooks books={allBooks} /> : <p>No books</p>}
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
