/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import AuthorsPage from '../pages/authorsPage'

describe('AuthorsPage with api', function () {
	before(function () {
		cy.fixture('bookworm').as('data')
	})

	before(function () {
		cy.bookwormLogin(this.data.email, this.data.password)
	})

	const ionTabs = new IonTabs()
	const authorsPage = new AuthorsPage()

	it('should display authors', function () {
		ionTabs.clickAuthorsTab()
		authorsPage.checkUrl()
		authorsPage.checkTitleIsVisible()
	})

	it('should have functional tabs', function () {
		authorsPage.checkTabOverviewIsVisible()
		authorsPage.checkTabStatisticsIsVisible()
		authorsPage.clickTabStatitics()
		authorsPage.clickTabOverview()
	})
})
