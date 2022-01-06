import React, { ReactElement } from 'react'
import { useAppState } from '../../overmind'

const Feedback: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return isLoggedIn ? (
		<h1 className="title">Feedback</h1>
	) : (
		<p>you are not logged in</p>
	)
}

export default Feedback
