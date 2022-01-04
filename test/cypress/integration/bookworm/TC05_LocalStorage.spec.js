/// <reference types="cypress" />

import AppBar from '../components/appBar'
import BooksPage from '../pages/booksPage'

describe('Remove token from local storage', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const appBar = new AppBar()
	const booksPage = new BooksPage()

	it('should go to home after reload', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.clearLocalStorage('token')
		cy.reload()
		cy.wait(1000)
		booksPage.checkTitleIsVisible()
	})
})
