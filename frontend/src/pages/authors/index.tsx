import { Box } from '@mui/material'
import React, { ReactElement, useEffect } from 'react'
import { useAppState, useActions } from '../../overmind'
import { useNavigate } from 'react-router-dom'
import BasicTabs from '../../components/BasicTabs'

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

	return (
		<>
			<BasicTabs
				overview={
					<Box>
						<h1 className="title">Authors</h1>
						<p>table with authors</p>
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
