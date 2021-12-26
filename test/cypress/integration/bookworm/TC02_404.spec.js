/// <reference types="cypress" />

describe('Login', function () {
  beforeEach(function () {
    cy.fixture('bookworm').as('data');
  });

  it('Login - Valid Credentials', function () {
    cy.visit('/');
    cy.get('.title').should('contain', 'Home');
    cy.contains('go to login page').click();
    cy.get('.title').should('contain', 'Login');
    cy.get('input[type="email"]').type(this.data.email);
    cy.get('input[type="password"]').type(this.data.password);
    cy.get('button[type="submit"]').click();
    cy.get('.title').should('contain', 'Books');
  });

  it('Page not found', function () {
    cy.visit('/unknown');
    cy.get('.title').should('contain', '404');
  });
});
