/// <reference types="cypress" />

import HomePage from '../pages/homePage'
import PageNotFoundPage from '../pages/pageNotFoundPage'

describe('Page not found', function () {
	const homePage = new HomePage()
	const pageNotFoundPage = new PageNotFoundPage()

	it('should display 404', function () {
		cy.visit('/')
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
		pageNotFoundPage.visitUnknownUrl()
		pageNotFoundPage.checkTitleIsVisible()
		pageNotFoundPage.checkText()
	})
})
