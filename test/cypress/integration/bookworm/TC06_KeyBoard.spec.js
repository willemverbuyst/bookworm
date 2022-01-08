/// <reference types="cypress" />

import AppBar from '../components/ToolBar'
import BooksPage from '../pages/booksPage'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'

describe('Login', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const appBar = new AppBar()
	const booksPage = new BooksPage()
	const homePage = new HomePage()
	const loginPage = new LoginPage()

	it('should submit by pressing enter', function () {
		cy.visit('/')
		cy.title().should('contain', 'Bookworm')
		homePage.checkTitleIsVisible()
		cy.contains('log in').click()
		loginPage.checkUrl()
		loginPage.checkTitleIsVisible()
		loginPage.enterEmail(this.data.email)
		cy.get('input[type="password"]').type(this.data.password + '{enter}')
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		appBar.clickLogOutButton()
	})
})
