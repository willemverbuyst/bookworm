class ToolBar {
	getLogInButton() {
		return 'LOG IN'
	}

	getLogOutButton() {
		return 'LOG OUT'
	}

	clickLogInButton() {
		cy.contains(this.getLogInButton()).click()
	}

	clickLogOutButton() {
		cy.contains(this.getLogOutButton()).click()
	}
}

export default ToolBar
