/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import ToolBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'

describe('BooksPage with api', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const ionTabs = new IonTabs()
	const booksPage = new BooksPage()
	const toolBar = new ToolBar()

	it('should display books', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.reload()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		toolBar.clickLogOutButton()
		booksPage.checkYouAreNotLoggedIn()
	})
})
