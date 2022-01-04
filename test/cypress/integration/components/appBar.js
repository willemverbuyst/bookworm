class AppBar {
	getLogInButton() {
		return 'log in'
	}

	getLogOutButton() {
		return 'log out'
	}

	clickLogInButton() {
		cy.contains(this.getLogInButton()).click()
	}

	clickLogOutButton() {
		cy.contains(this.getLogOutButton()).click()
	}
}

export default AppBar
