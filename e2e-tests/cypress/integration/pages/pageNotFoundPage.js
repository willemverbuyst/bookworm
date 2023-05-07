import Base from './base'

class PageNotFoundPage extends Base {
	constructor() {
		super('/', '404')
		this.messageElement = 'h3'
		this.messageText = 'page not found'
	}

	checkMessage() {
		cy.get(this.messageElement).contains(this.messageText)
	}
}

export default PageNotFoundPage
