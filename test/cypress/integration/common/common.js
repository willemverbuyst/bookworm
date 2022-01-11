import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I see {string} in the url', url => {
	cy.url().should('include', url)
})

defineStep('I see {string} as title', title => {
	cy.get('ion-title').should('contain', title)
})

defineStep('I see {string} as message', message => {
	cy.get('ion-text').should('contain', message)
})
