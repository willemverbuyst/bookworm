/// <reference types="cypress" />

import AppBar from '../components/appBar'
import BooksPage from '../pages/booksPage'

describe('BooksPage with mock', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const appBar = new AppBar()
	const booksPage = new BooksPage()

	it('should display books', function () {
		cy.intercept('GET', '**/books', { fixture: 'books.json' })
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.xpath("//div[normalize-space()='Fake Book 1']").should('be.visible')
		cy.xpath("//div[normalize-space()='Fake Book 2']").should('be.visible')
		cy.xpath("//div[normalize-space()='Fake Book 3']").should('not.exist')
		appBar.clickLogOutButton()
		booksPage.checkTitleIsVisible()
	})
})
