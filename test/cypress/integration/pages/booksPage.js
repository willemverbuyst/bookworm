class BooksPage {
	getTitle() {
		return '.title'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Books')
	}

	checkUrl() {
		cy.url().should('include', '/books')
	}
}

export default BooksPage
