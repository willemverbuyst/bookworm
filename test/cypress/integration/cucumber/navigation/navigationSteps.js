/// <reference types="cypress" />

import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import AppBar from '../../components/AppBar'

const appBar = new AppBar()

Given(/^I use the application$/, () => {
	cy.visit('/')
})

When(/^I click on the book link$/, () => {
	appBar.clickLinkBooks()
})

When(/^I click on the author link$/, () => {
	appBar.clickLinkAuthors()
})

When(/^I click on the review link$/, () => {
	appBar.clickLinkReview()
})

When(/^I click on the home link$/, () => {
	appBar.clickLinkHome()
})
