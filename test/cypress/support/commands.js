import HomePage from '../integration/pages/homePage'
import LoginPage from '../integration/pages/loginPage'

Cypress.Commands.add('bookwormLogin', function (email, password) {
	const home = new HomePage()
	const loginPage = new LoginPage()

	cy.visit('/')
	cy.title().should('contain', 'Bookworm')
	home.checkTitleIsVisible()
	home.clickOnGotoLoginLink()
	loginPage.checkUrl()
	loginPage.checkTitleIsVisible()
	loginPage.enterEmail(email)
	loginPage.enterPassword(password)
	loginPage.clickLoginButton()
})
