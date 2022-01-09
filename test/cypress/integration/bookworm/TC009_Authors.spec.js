/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import ToolBar from '../components/ToolBar'
import AuthorsPage from '../pages/authorsPage'

describe('AuthorsPage with api', function () {
	beforeEach(function () {
		cy.fixture('bookworm').as('data')
	})

	const ionTabs = new IonTabs()
	const auhtorsPage = new AuthorsPage()
	const toolBar = new ToolBar()

	it('should display authors', function () {
		cy.bookwormLogin(this.data.email, this.data.password)
		ionTabs.clickAuthorsTab()
		auhtorsPage.checkUrl()
		auhtorsPage.checkTitleIsVisible()
	})
})
