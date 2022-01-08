class HomePage {
	getTitle() {
		return 'ion-title'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Home')
	}

	checkUrl() {
		cy.url().should('include', '/home')
	}
}

export default HomePage
