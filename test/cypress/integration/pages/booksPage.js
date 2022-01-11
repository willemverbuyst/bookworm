class BooksPage {
	getTabOverview() {
		return '#simple-tab-0'
	}

	getTabStatistics() {
		return '#simple-tab-1'
	}

	getTitle() {
		return 'ion-title'
	}

	getNoBooks() {
		return 'No books'
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
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Books')
	}

	checkUrl() {
		cy.url().should('include', '/books')
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

export default BooksPage
