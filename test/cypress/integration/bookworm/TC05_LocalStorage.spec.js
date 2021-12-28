/// <reference types="cypress" />

import BooksPage from '../pages/booksPage'
import HomePage from '../pages/homePage'

describe('Remove token from local storage', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const homePage = new HomePage()

	it('should go to home after reload', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.clearLocalStorage('token')
		cy.reload()
		homePage.checkTitleIsVisible()
	})
})
