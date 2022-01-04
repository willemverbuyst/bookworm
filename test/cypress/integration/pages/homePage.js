class HomePage {
	getTitle() {
		return '.title'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Home')
	}
}

export default HomePage
