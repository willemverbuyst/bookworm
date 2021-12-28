/// <reference types="cypress" />

import BooksPage from '../pages/booksPage'
import PageNotFoundPage from '../pages/pageNotFoundPage'

describe('Login', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const pageNotFoundPage = new PageNotFoundPage()

	it('Page not found', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		pageNotFoundPage.visitUnknownUrl()
		pageNotFoundPage.checkTitleIsVisible()
	})
})
