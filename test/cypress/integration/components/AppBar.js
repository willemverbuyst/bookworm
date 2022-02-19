class AppBar {
	constructor() {
		this.captionLogInBtn = 'LOG IN'
		this.captionLogOutBtn = 'LOG OUT'
		this.link = 'button'
		this.linkAuthors = 'authors'
		this.linkBooks = 'books'
		this.linkHome = 'home'
		this.linkReview = 'review'
		this.loginBtn = '#login-btn'
		this.logoutBtn = '#logout-btn'
	}

	clickLogInButton() {
		cy.get(this.loginBtn).contains(this.captionLogInBtn).click()
	}

	clickLogOutButton() {
		cy.get(this.logoutBtn).contains(this.captionLogOutBtn).click()
	}

	clickLinkAuthors() {
		cy.get(this.link).contains(this.linkAuthors).click()
	}

	clickLIinkBooks() {
		cy.get(this.link).contains(this.linkBooks).click()
	}

	clickLinkHome() {
		cy.get(this.link).contains(this.linkHome).click()
	}

	clickLinkReview() {
		cy.get(this.link).contains(this.linkReview).click()
	}
}

export default AppBar
