import React, { ReactElement } from 'react'
import ToolBar from '../../components/ToolBar'

const PageNotFound: React.FC = (): ReactElement => {
	return (
		<>
			<ToolBar />
			<h3>page not found</h3>
		</>
	)
}
export default PageNotFound
