/// <reference types="cypress" />

describe('Login', function () {
  beforeEach(function () {
    cy.fixture('bookworm').as('data');
  });

  it('Login - Valid Credentials', function () {
    cy.bookwormLogin(this.data.email, this.data.password);
    cy.get('.title').should('contain', 'Books');
    cy.contains('log out').click();
    cy.get('.title').should('contain', 'Home');
  });

  it('Login - Invalid Credentials', function () {
    cy.bookwormLogin(this.data.email, this.data.wrongPassword);
    cy.contains('User with this email and password not found!');
  });
});
