class BooksPage {
	getTitle() {
		return 'ion-title'
	}

	getNoBooks() {
		return 'No books'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Books')
	}

	checkUrl() {
		cy.url().should('include', '/books')
	}

	checkYouAreNotLoggedIn() {
		cy.contains(this.getYouAreNotLoggedIn())
	}
}

export default BooksPage
