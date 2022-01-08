/// <reference types="cypress" />

import AppBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'

describe('BooksPage with api', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const appBar = new AppBar()
	const booksPage = new BooksPage()

	it('should display books', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.reload()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		appBar.clickLogOutButton()
		booksPage.checkYouAreNotLoggedIn()
	})
})
