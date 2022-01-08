/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import AuthorsPage from '../pages/authorsPage'
import BooksPage from '../pages/booksPage'
import FeedbackPage from '../pages/feedbackPage'
import HomePage from '../pages/homePage'

describe('Using IonTabs', function () {
	const ionTabs = new IonTabs()
	const authorsPage = new AuthorsPage()
	const booksPage = new BooksPage()
	const feedbackPage = new FeedbackPage()
	const homePage = new HomePage()

	it('should navigate successfully to  the author page', function () {
		cy.visit('/')

		ionTabs.clickAuthorsTab()
		authorsPage.checkUrl()
		authorsPage.checkTitleIsVisible()
		authorsPage.checkYouAreNotLoggedIn()

		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		booksPage.checkYouAreNotLoggedIn()

		ionTabs.clickFeedbackTab()
		feedbackPage.checkUrl()
		feedbackPage.checkTitleIsVisible()
		feedbackPage.checkYouAreNotLoggedIn

		ionTabs.clickHomeTab()
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
		homePage.checkWelcomeText()
	})
})
