class Base {
	constructor(url, titleText = '') {
		this.titleElement = '#title'
		this.titleText = titleText
		this.url = url
	}

	checkTitleIsVisible() {
		cy.get(this.titleElement).should('contain', this.titleText)
	}

	checkUrl() {
		cy.url().should('include', this.url)
	}
}

export default Base
