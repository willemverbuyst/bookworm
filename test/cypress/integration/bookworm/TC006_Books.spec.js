/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import ToolBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'

describe('BooksPage with api', function () {
	before(function () {
		cy.fixture('bookworm').as('data')
	})

	before(function () {
		cy.bookwormLogin(this.data.email, this.data.password)
	})

	const ionTabs = new IonTabs()
	const booksPage = new BooksPage()
	const toolBar = new ToolBar()

	it('should display books', function () {
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		cy.reload()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
	})

	it('should have functional tabs', function () {
		booksPage.checkTabOverviewIsVisible()
		booksPage.checkTabStatisticsIsVisible()
		booksPage.clickTabStatitics()
		booksPage.clickTabOverview()
	})

	it('should be able to log out', function () {
		toolBar.clickLogOutButton()
		booksPage.checkYouAreNotLoggedIn()
	})
})
