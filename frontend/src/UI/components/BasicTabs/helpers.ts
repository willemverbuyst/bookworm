export const a11yProps = (index: number): { [key: string]: string } => ({
	id: `simple-tab-${index}`,
	'aria-controls': `simple-tabpanel-${index}`,
})
