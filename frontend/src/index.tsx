import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import reportWebVitals from './reportWebVitals';
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import { ThemeProvider } from '@mui/material'
import { config } from './business/overmind'
import App from './App'
import theme from './theme/colors'

const overmind = createOvermind(config)

ReactDOM.render(
	<React.StrictMode>
		<Provider value={overmind}>
			<ScopedCssBaseline>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</ScopedCssBaseline>
		</Provider>
		,
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
