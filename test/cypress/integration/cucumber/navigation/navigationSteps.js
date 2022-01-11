/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import IonTabs from '../../components/IonTabs'
import AuthorsPage from '../../pages/authorsPage'
import BooksPage from '../../pages/booksPage'
import FeedbackPage from '../../pages/feedbackPage'
import HomePage from '../../pages/homePage'

const ionTabs = new IonTabs()
const authorsPage = new AuthorsPage()
const booksPage = new BooksPage()
const feedbackPage = new FeedbackPage()
const homePage = new HomePage()

Given(/^I use the application$/, () => {
	cy.visit('/')
})

When(/^I click on the Book tab$/, () => {
	ionTabs.clickBooksTab()
})

Then(/^I should see the book page$/, () => {
	booksPage.checkUrl()
	booksPage.checkTitleIsVisible()
})

When(/^I click on the Author tab$/, () => {
	ionTabs.clickAuthorsTab()
})

Then(/^I should see the author page$/, () => {
	authorsPage.checkUrl()
	authorsPage.checkTitleIsVisible()
})

When(/^I click on the Feeback tab$/, () => {
	ionTabs.clickFeedbackTab()
})

Then(/^I should see the feedback page$/, () => {
	feedbackPage.checkTitleIsVisible()
	feedbackPage.checkYouAreNotLoggedIn
})

When(/^I click on the Home tab$/, () => {
	ionTabs.clickHomeTab()
})

Then(/^I should see the home page$/, () => {
	homePage.checkUrl()
	homePage.checkTitleIsVisible()
})
