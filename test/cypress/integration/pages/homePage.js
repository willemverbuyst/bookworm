class HomePage {
	getGotoLoginLink() {
		return 'go to login page'
	}

	getTitle() {
		return '.title'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Home')
	}

	clickOnGotoLoginLink() {
		cy.contains(this.getGotoLoginLink()).click()
	}
}

export default HomePage
