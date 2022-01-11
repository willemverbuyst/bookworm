import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'

interface TabPanelProps {
	// eslint-disable-next-line react/require-default-props
	children?: React.ReactNode
	index: number
	value: number
}

const TabPanel = ({
	children,
	value,
	index,
	...other
}: TabPanelProps): ReactElement => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

export default TabPanel
