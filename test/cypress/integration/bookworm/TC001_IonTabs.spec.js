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

	before(function () {
		cy.visit('/')
	})

	it('should show author page', function () {
		ionTabs.clickAuthorsTab()
		authorsPage.checkUrl()
		authorsPage.checkTitleIsVisible()
		authorsPage.checkYouAreNotLoggedIn()
	})

	it('should show books page', function () {
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		booksPage.checkYouAreNotLoggedIn()
	})

	it('should show feedback page', function () {
		ionTabs.clickFeedbackTab()
		feedbackPage.checkUrl()
		feedbackPage.checkTitleIsVisible()
		feedbackPage.checkYouAreNotLoggedIn
	})

	it('should show home page', function () {
		ionTabs.clickHomeTab()
		homePage.checkUrl()
		homePage.checkTitleIsVisible()
		homePage.checkYouAreNotLoggedIn()
	})
})
