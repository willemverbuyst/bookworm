import Base from './base'

class LoginPage extends Base {
	constructor() {
		super('login', 'Login')
		this.inputEmail = 'input[name="email"]'
		this.inputPassword = 'input[name="password"]'
		this.submitBtn = 'button[type="submit"]'
	}

	clickLoginButton() {
		cy.get(this.submitBtn).click()
	}

	enterEmail(email) {
		cy.get(this.inputEmail).clear()
		cy.get(this.inputEmail).type(email)
	}

	enterPassword(password) {
		cy.get(this.inputPassword).clear()
		cy.get(this.inputPassword).type(password)
	}
}

export default LoginPage
