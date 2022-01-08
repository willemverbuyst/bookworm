class AuthorsPage {
	getTitle() {
		return 'ion-title'
	}

	getNoAuthors() {
		return 'No authors'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Authors')
	}

	checkUrl() {
		cy.url().should('include', '/authors')
	}

	checkYouAreNotLoggedIn() {
		cy.contains(this.getYouAreNotLoggedIn())
	}
}

export default AuthorsPage
