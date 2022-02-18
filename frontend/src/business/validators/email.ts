export const isValidEmail = (email: string): boolean => {
	console.log('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
