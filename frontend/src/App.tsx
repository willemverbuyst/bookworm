import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Authors from './UI/pages/Authors'
import Books from './UI/pages/Books'
import Feedback from './UI/pages/Feedback'
import Login from './UI/pages/Login'
import PageNotFound from './UI/pages/PageNotFound'
import Root from './UI/pages/Root'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/home" />} />
			<Route path="/" element={<Root />} />
			<Route path="/home" element={<Root />} />
			<Route path="/books" element={<Books />} />
			<Route path="/authors" element={<Authors />} />
			<Route path="/feedback" element={<Feedback />} />
			<Route path="login" element={<Login />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	)
}
export default App
