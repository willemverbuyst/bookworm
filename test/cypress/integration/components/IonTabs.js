class IonTabs {
	getAuthorsTab() {
		return '#tab-button-authors'
	}

	getBooksTab() {
		return '#tab-button-books'
	}

	getFeedbackTab() {
		return '#tab-button-feedback'
	}

	clickAuthorsTab() {
		cy.get(this.getAuthorsTab()).click()
	}

	clickBooksTab() {
		cy.get(this.getBooksTab()).click()
	}

	clickFeedbackTab() {
		cy.get(this.getFeedbackTab()).click()
	}
}

export default IonTabs
