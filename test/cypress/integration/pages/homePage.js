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

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Home')
	}

	checkWelcomeText() {
		cy.get(this.getWelcomeText()).should('contain', 'Welcome!')
	}

	checkUrl() {
		cy.url().should('include', '/home')
	}

	clickLoginLink() {
		cy.get('a').contains(this.getLoginLink()).click()
	}
}

export default HomePage
