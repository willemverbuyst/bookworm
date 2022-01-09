/// <reference types="cypress" />

import ToolBar from '../components/ToolBar'
import HomePage from '../pages/homePage'
import LoginPage from '../pages/loginPage'

describe('Login', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const homePage = new HomePage()
	const loginPage = new LoginPage()
	const toolBar = new ToolBar()

	it('should login successfully with valid credentials', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
		toolBar.clickLogOutButton()
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
		homePage.checkWelcomeText()
	})

	it('should display error message with invalid credentials', function () {
		cy.bookwormLogin(this.data.email, this.data.wrongPassword)
		loginPage.displayErrorMessage()
	})
})
