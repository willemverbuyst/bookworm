/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import AuthorsPage from '../pages/authorsPage'

describe('AuthorsPage with api', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const ionTabs = new IonTabs()
	const auhtorsPage = new AuthorsPage()

	it('should display authors', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		ionTabs.clickAuthorsTab()
		auhtorsPage.checkUrl()
		auhtorsPage.checkTitleIsVisible()
	})
})
