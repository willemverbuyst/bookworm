import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useAppState, useActions } from '../../overmind'
import { useNavigate } from 'react-router-dom'
import BasicTabs from '../../components/BasicTabs'
import TableForOverview from '../../components/Table'

const Authors: React.FC = (): ReactElement => {
	const navigate = useNavigate()
	const { allAuthors, isLoggedIn } = useAppState()
	const { fetchAllAuthors } = useActions()

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/')
		}
	})

	useEffect(() => {
		if (!allAuthors) {
			fetchAllAuthors()
		}
	})

	const columns = [
		{ field: 'name', headerName: 'name', width: 450 },
		{ field: 'books_written', headerName: 'books written', width: 150 },
	]

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Authors</h1>
						{allAuthors ? (
							<TableForOverview rows={allAuthors} columns={columns} />
						) : (
							<p>No books</p>
						)}
					</Box>
				}
				statistics={
					<Box>
						<h1 className="title">Authors</h1>
						<p>some charts</p>
					</Box>
				}
			/>
		</>
	)
}

export default Authors
