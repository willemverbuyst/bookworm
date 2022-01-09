class AuthorsPage {
	getTabOverview() {
		return '#simple-tab-0'
	}

	getTabStatistics() {
		return '#simple-tab-1'
	}

	getTitle() {
		return 'ion-title'
	}

	getNoAuthors() {
		return 'No authors'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTabOverviewIsVisible() {
		cy.get(this.getTabOverview()).should('be.visible')
	}

	checkTabStatisticsIsVisible() {
		cy.get(this.getTabStatistics()).should('be.visible')
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

	clickTabOverview() {
		cy.get(this.getTabOverview()).click()
	}

	clickTabStatitics() {
		cy.get(this.getTabStatistics()).click()
	}
}

export default AuthorsPage
