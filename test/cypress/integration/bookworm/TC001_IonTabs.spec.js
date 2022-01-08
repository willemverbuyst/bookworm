/// <reference types="cypress" />

import IonTabs from '../components/IonTabs'
import AuthorsPage from '../pages/authorsPage'
import BooksPage from '../pages/booksPage'
import FeedbackPage from '../pages/feedbackPage'

describe('Login', function () {
	const ionTabs = new IonTabs()
	const authorsPage = new AuthorsPage()
	const booksPage = new BooksPage()
	const feedbackPage = new FeedbackPage()

	it('should nvigate successfully', function () {
		cy.visit('/')
		ionTabs.clickAuthorsTab()
		authorsPage.checkUrl()
		authorsPage.checkTitleIsVisible()
		ionTabs.clickBooksTab()
		booksPage.checkUrl()
		booksPage.checkTitleIsVisible()
		ionTabs.clickFeedbackTab()
		feedbackPage.checkUrl()
		feedbackPage.checkTitleIsVisible()
	})
})
