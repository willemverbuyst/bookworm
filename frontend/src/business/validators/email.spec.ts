import { isValidEmail } from './email'

describe('isValidEmail', () => {
	it('should return false when email has not the correct format', () => {
		expect(isValidEmail('ping@pong')).toBe(false)
		expect(isValidEmail('ping.io')).toBe(false)
		expect(isValidEmail('@pong.io')).toBe(false)
	})

	it('should return true when email has the correct format', () => {
		expect(isValidEmail('ping@pong.io')).toBe(true)
	})
})
