/// <reference types="cypress" />

describe('Login', function () {
  beforeEach(function () {
    cy.fixture('bookworm').as('data');
  });

  it('Page not found', function () {
    cy.bookwormLogin(this.data.email, this.data.password);
    cy.get('.title').should('contain', 'Books');
    cy.visit('/unknown');
    cy.get('.title').should('contain', '404');
  });
});
