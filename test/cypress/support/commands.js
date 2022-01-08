import ToolBar from '../integration/components/ToolBar'
import HomePage from '../integration/pages/homePage'
import LoginPage from '../integration/pages/loginPage'

Cypress.Commands.add('bookwormLogin', function (email, password) {
	const homePage = new HomePage()
	const loginPage = new LoginPage()
	const toolBar = new ToolBar()

	cy.visit('/')
	cy.clearLocalStorage('token')
	homePage.checkTitleIsVisible()
	toolBar.clickLogInButton()
	loginPage.checkUrl()
	loginPage.checkTitleIsVisible()
	loginPage.enterEmail(email)
	loginPage.enterPassword(password)
	loginPage.clickLoginButton()
})
