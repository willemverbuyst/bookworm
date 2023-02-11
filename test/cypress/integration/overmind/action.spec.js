context('Overmind', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('has values in state object', function () {
		cy.overmind().its('state.testProp').should('equal', 123)
		cy.overmind().as('ovemindState').log('@overmindState')
	})
})
