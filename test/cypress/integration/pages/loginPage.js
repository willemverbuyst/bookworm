class LoginPage {
	getEmail() {
		return 'input[type="email"]'
	}

	getErrorMessage() {
		return 'User with this email and password not found!'
	}

	getLoginButton() {
		return 'button[type="submit"]'
	}

	getPassword() {
		return 'input[type="password"]'
	}

	getTitle() {
		return 'ion-title'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Login')
	}

	checkUrl() {
		cy.url().should('include', '/login')
	}

	clickLoginButton() {
		cy.get(this.getLoginButton()).click()
	}

	displayErrorMessage() {
		cy.contains(this.getErrorMessage())
	}

	enterEmail(email) {
		cy.get(this.getEmail()).clear()
		cy.get(this.getEmail()).type(email)
	}

	enterPassword(password) {
		cy.get(this.getPassword()).clear()
		cy.get(this.getPassword()).type(password)
	}
}

export default LoginPage
