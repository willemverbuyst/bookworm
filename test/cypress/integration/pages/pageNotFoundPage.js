class PageNotFoundPage {
	getText() {
		return 'ion-text'
	}

	getTitle() {
		return 'ion-title'
	}

	getUnknownUrl() {
		return '/unknown'
	}

	checkText() {
		cy.get(this.getText()).should('contain', 'page not found')
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', '404')
	}

	visitUnknownUrl() {
		cy.visit(this.getUnknownUrl())
	}
}

export default PageNotFoundPage
