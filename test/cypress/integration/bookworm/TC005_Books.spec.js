/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import ToolBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'

describe('BooksPage with mock', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const ionTabs = new IonTabs()
	const toolBar = new ToolBar()

	it('should display books', function () {
		cy.intercept('GET', '**/books', { fixture: 'books.json' })
		cy.bookwormLogin(this.data.email, this.data.password)
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.xpath("//div[normalize-space()='Fake Book 1']").should('be.visible')
		cy.xpath("//div[normalize-space()='Fake Book 2']").should('be.visible')
		cy.xpath("//div[normalize-space()='Fake Book 3']").should('not.exist')
		toolBar.clickLogOutButton()
		booksPage.checkYouAreNotLoggedIn()
	})
})
