/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import ToolBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'

describe('Login', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const booksPage = new BooksPage()
	const homePage = new HomePage()
	const ionTabs = new IonTabs()
	const loginPage = new LoginPage()
	const toolBar = new ToolBar()

	it('should submit by pressing enter', function () {
		cy.visit('/')
		homePage.checkTitleIsVisible()
		toolBar.clickLogInButton()
		loginPage.checkUrl()
		loginPage.checkTitleIsVisible()
		loginPage.enterEmail(this.data.email)
		cy.get('input[type="password"]').type(this.data.password + '{enter}')
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
	})
})
