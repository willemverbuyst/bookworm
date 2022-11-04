import './App.css'
import MuiForm from './Pages/MUIForm'
import SimpleForm from './Pages/SimpleForm'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    text: {
      primary: '#27343a',
      secondary: '#6f9f77',
    },
    primary: {
      main: '#27343a',
      contrastText: '#f3f3f0',
    },
    secondary: {
      main: '#d0a330',
      contrastText: '#27343a',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MuiForm />
      </div>
    </ThemeProvider>
  )
}

export default App
