class HomePage {
	getLoginLink() {
		return 'Login'
	}

	getTitle() {
		return 'ion-title'
	}

	getWelcomeText() {
		return 'ion-text'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Home')
	}

	checkUrl() {
		cy.url().should('include', '/home')
	}

	checkWelcomeText() {
		cy.get(this.getWelcomeText()).should('contain', 'Welcome!')
	}

	checkYouAreNotLoggedIn() {
		cy.contains(this.getYouAreNotLoggedIn())
	}

	clickLoginLink() {
		cy.get('a').contains(this.getLoginLink()).click()
	}
}

export default HomePage
