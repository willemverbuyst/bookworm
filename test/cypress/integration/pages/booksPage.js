class BooksPage {
	getTitle() {
		return '.title'
	}

	getNoBooks() {
		return 'No books'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Books')
	}

	checkUrl() {
		cy.url().should('include', '/books')
	}
}

export default BooksPage
