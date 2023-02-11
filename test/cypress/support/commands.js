import AppBar from '../integration/components/AppBar'
import HomePage from '../integration/pages/homePage'
import LoginPage from '../integration/pages/loginPage'

Cypress.Commands.add('bookwormLogin', function (email, password) {
	const appBar = new AppBar()
	const homePage = new HomePage()
	const loginPage = new LoginPage()

	cy.visit('/')
	cy.clearLocalStorage('token')
	homePage.checkTitleIsVisible()
	appBar.clickLogInButton()
	loginPage.checkUrl()
	loginPage.checkTitleIsVisible()
	loginPage.enterEmail(email)
	loginPage.enterPassword(password)
	loginPage.clickLoginButton()
})

// https://www.cypress.io/blog/2019/02/28/shrink-the-untestable-code-with-app-actions-and-effects/
Cypress.Commands.add('overmind', () => {
	let overmind

	const cmd = Cypress.log({
		name: 'overmind',
		consoleProps() {
			return {
				Overmind: overmind,
			}
		},
	})

	return (
		cy
			.window({ log: false })
			// instead of .its('overmind') that always logs to the console
			// use ".then" shortcut (but without retry)
			.then({ log: false }, win => {
				overmind = win.overmind
				cmd.end()
				return overmind
			})
	)
})
