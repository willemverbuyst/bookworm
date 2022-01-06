class BooksPage {
	getTitle() {
		return '.title'
	}

	getNoBooks() {
		return 'No books'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Books')
	}

	checkUrl() {
		cy.url().should('include', '/books')
	}

	checkYouAreNotLoggedIn() {
		cy.contains(this.getYouAreNotLoggedIn())
	}
}

export default BooksPage
