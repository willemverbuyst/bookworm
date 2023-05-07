import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AppBar from '../../components/AppBar'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
const appBar = new AppBar()

beforeEach(function () {
	cy.fixture('bookworm').as('data')
})

Given(/^I open the login page$/, function () {
	cy.visit('/')
	appBar.clickLogInButton()
})

When(/^I login with valid credentials$/, function () {
	cy.fixture('bookworm').as('data')
	cy.bookwormLogin(this.data.email, this.data.password)
})

Given(/^I open the login page$/, function () {
	cy.visit('/')
	appBar.clickLogInButton()
})

When(/^I login with invalid credentials$/, function () {
	cy.fixture('bookworm').as('data')
	cy.bookwormLogin(this.data.email, this.data.wrongPassword)
})
