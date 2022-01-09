/// <reference types="cypress" />

import HomePage from '../pages/homePage'

describe('Visiting root', function () {
	const homePage = new HomePage()

	it('should redirect to home', function () {
		cy.visit('/')
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
	})
})
