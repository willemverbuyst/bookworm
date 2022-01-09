/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import IonTabs from '../../components/IonTabs'
import HomePage from '../../pages/homePage'

const ionTabs = new IonTabs()
const homePage = new HomePage()

Given(/^I use the applicate$/, () => {
	cy.visit('/')
})

When(/^I click on the Home tab$/, () => {
	ionTabs.clickHomeTab()
})

Then(/^I should see the home page$/, () => {
	homePage.checkUrl()
	homePage.checkTitleIsVisible()
	homePage.checkWelcomeText()
})
