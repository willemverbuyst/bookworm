class HomePage {
	getTitle() {
		return 'ion-title'
	}

	getWelcomeText() {
		return 'ion-text'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'Home')
	}

	checkWelcomeText() {
		cy.get(this.getWelcomeText()).should('contain', 'Welcome!')
	}

	checkUrl() {
		cy.url().should('include', '/home')
	}
}

export default HomePage
