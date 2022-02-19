import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import { useAppState } from '../../../business/overmind'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomizedSnackbars: React.FC = (): React.ReactElement => {
	const { apiResponse } = useAppState()
	const [open, setOpen] = React.useState(false)
	const [severity, setSeverity] = React.useState<AlertColor>()
	const [message, setMessage] = React.useState<string>()

	React.useEffect(() => {
		if (apiResponse.message) {
			setOpen(true)
			setSeverity(apiResponse.status)
			setMessage(apiResponse.message)
		}
	}, [apiResponse])

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</Stack>
	)
}

export default CustomizedSnackbars
