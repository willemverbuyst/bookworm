import React, { ReactElement } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from './TabPanel'
import { a11yProps } from './helpers'

interface IProps {
	overview: ReactElement
	statistics: ReactElement
}

const BasicTabs: React.FC<IProps> = ({
	overview,
	statistics,
}: IProps): ReactElement => {
	const [value, setValue] = React.useState(0)

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="overview" {...a11yProps(0)} />
					<Tab label="statistics" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				{overview}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{statistics}
			</TabPanel>
		</Box>
	)
}

export default BasicTabs
