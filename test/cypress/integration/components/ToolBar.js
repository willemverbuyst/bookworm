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
		cy.get('ion-button').should(e => {
			const [dom] = e.get()
			dom.shadowRoot.querySelector('button').click()
		})
	}
}

export default ToolBar
