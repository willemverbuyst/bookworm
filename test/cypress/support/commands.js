import AppBar from '../integration/components/appBar'
import HomePage from '../integration/pages/homePage'
import LoginPage from '../integration/pages/loginPage'

Cypress.Commands.add('bookwormLogin', function (email, password) {
	const appBar = new AppBar()
	const homePage = new HomePage()
	const loginPage = new LoginPage()

	cy.visit('/')
	cy.clearLocalStorage('token')
	cy.title().should('contain', 'Bookworm')
	homePage.checkTitleIsVisible()
	appBar.clickLogInButton()
	loginPage.checkUrl()
	loginPage.checkTitleIsVisible()
	loginPage.enterEmail(email)
	loginPage.enterPassword(password)
	loginPage.clickLoginButton()
})
