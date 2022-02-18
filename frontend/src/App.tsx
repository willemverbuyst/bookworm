import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppBar from './UI/components/AppBar'
import Authors from './UI/pages/Authors'
import Books from './UI/pages/Books'
import Review from './UI/pages/Review'
import Login from './UI/pages/Login'
import PageNotFound from './UI/pages/PageNotFound'
import Root from './UI/pages/Root'

const App: React.FC = () => {
	return (
		<Box>
			<AppBar />
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<Root />} />
				<Route path="/books" element={<Books />} />
				<Route path="/authors" element={<Authors />} />
				<Route path="/login" element={<Login />} />
				<Route path="/review" element={<Review />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Box>
	)
}
export default App
