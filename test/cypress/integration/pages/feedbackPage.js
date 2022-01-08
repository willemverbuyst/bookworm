class FeedbackPage {
	getTitle() {
		return 'ion-title'
	}

	getNoFeedback() {
		return 'No feedback'
	}

	getYouAreNotLoggedIn() {
		return 'you are not logged in'
	}

	checkTitleIsVisible() {
		cy.get(this.getTitle()).should('contain', 'BOOKWORM Feedback')
	}

	checkUrl() {
		cy.url().should('include', '/feedback')
	}

	checkYouAreNotLoggedIn() {
		cy.contains(this.getYouAreNotLoggedIn())
	}
}

export default FeedbackPage
