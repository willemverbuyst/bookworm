class ToolBar {
	getLogInButton() {
		return 'LOG IN'
	}

	getLogOutButton() {
		return 'LOG OUT'
	}

	clickLogInButton() {
		cy.get('ion-button').contains(this.getLogInButton()).click()
	}

	clickLogOutButton() {
		cy.get('ion-button').contains(this.getLogOutButton()).click()
	}
}

export default ToolBar
