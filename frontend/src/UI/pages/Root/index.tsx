import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'

const Root: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()

	return isLoggedIn ? <h3>Welcome!</h3> : <h3>you are not logged in</h3>
}

export default Root
