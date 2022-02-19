import Base from './base'

class HomePage extends Base {
	constructor() {
		super('/home', 'Home')
		this.welcomeElement = '.welcome-message'
		this.welcomeText =
			'Welcome bookworm, have a look at our library and leave a book review.'
	}

	checkWelcomeMessage() {
		cy.get(this.welcomeElement).contains(this.welcomeText)
	}
}

export default HomePage
