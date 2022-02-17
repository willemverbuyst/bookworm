import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'
import ToolBar from '../../components/AppBar'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return (
		<>
			<ToolBar />
			{isLoggedIn ? (
				<h3>Give some feedback</h3>
			) : (
				<h3>you are not logged in</h3>
			)}
		</>
	)
}

export default Feedback
