/// <reference types="cypress" />

import BooksPage from '../pages/booksPage'
import PageNotFoundPage from '../pages/pageNotFoundPage'

describe('Page not found', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const pageNotFoundPage = new PageNotFoundPage()

	it('should display 404', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		pageNotFoundPage.visitUnknownUrl()
		pageNotFoundPage.checkTitleIsVisible()
	})
})
