import React, { ReactElement } from 'react'
// import { useHistory } from 'react-router-dom'
import { useActions } from '../../../business/overmind'

const ToolBar: React.FC = (): ReactElement => {
	// const history = useHistory()
	const { logoutUser } = useActions()
	const logOut = () => {
		logoutUser()
		// history.push('/login')
	}

	return <p>bookworm</p>
}

export default ToolBar
