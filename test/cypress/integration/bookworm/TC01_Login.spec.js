/// <reference types="cypress" />

import AppBar from '../components/appBar'
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

	it('Login - Valid Credentials', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		appBar.clickLogOutButton()
		homePage.checkTitleIsVisible()
	})

	it('Login - Invalid Credentials', function () {
		cy.bookwormLogin(this.data.email, this.data.wrongPassword)
		loginPage.displayErrorMessage()
	})
})
