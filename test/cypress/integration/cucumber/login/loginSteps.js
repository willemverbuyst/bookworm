import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ToolBar from '../../components/ToolBar'
import HomePage from '../../pages/homePage'
import LoginPage from '../../pages/loginPage'

const homePage = new HomePage()
const loginPage = new LoginPage()
const toolbar = new ToolBar()

Given('I open the login page', () => {
	cy.visit('/')
	toolbar.clickLogInButton()
})

When('I login with valid credentials', () => {
	loginPage.checkUrl()
	loginPage.checkTitleIsVisible()
	loginPage.enterEmail('ping@pong.io')
	loginPage.enterPassword('test123')
	loginPage.clickLoginButton()
})

Then('I should see the home page', () => {
	homePage.checkUrl()
	homePage.checkTitleIsVisible()
	homePage.checkWelcomeText()
})
