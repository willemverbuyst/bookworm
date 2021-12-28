import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authors from './pages/authors'
import Books from './pages/books'
import Feedback from './pages/feedback'
import Login from './pages/login'
import Root from './pages/root'
import PageNotFound from './pages/pageNotFound'
import AppBar from './components/AppBar'
import { ReactElement } from 'react'

const App: React.FC = (): ReactElement => {
	return (
		<div className="App">
			<BrowserRouter>
				<AppBar />
				<Routes>
					<Route path="/" element={<Root />} />
					<Route path="/authors" element={<Authors />} />
					<Route path="/books" element={<Books />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
