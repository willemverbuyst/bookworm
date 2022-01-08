/// <reference types="cypress" />

import BooksPage from '../pages/booksPage'

describe('Remove token from local storage', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()

	it('should show you are not logged in', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.clearLocalStorage('token')
		cy.wait(1000)
		cy.reload()
		cy.wait(1000)
		booksPage.checkYouAreNotLoggedIn()
	})
})
