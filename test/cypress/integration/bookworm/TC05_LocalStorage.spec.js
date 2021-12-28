/// <reference types="cypress" />

import BooksPage from '../pages/booksPage'
import HomePage from '../pages/homePage'

describe('Login', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const homePage = new HomePage()

	it('Login - Valid Credentials', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.clearLocalStorage('token')
		cy.reload()
		homePage.checkTitleIsVisible()
	})
})
