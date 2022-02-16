import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return isLoggedIn ? (
		<h3>Give some feedback</h3>
	) : (
		<h3>you are not logged in</h3>
	)
}

export default Feedback
