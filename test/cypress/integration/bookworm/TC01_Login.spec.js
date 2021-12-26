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
    cy.contains('log out').click();
    cy.get('.title').should('contain', 'Home');
  });

  it('Login - Invalid Credentials', function () {
    cy.visit('/');
    cy.get('.title').should('contain', 'Home');
    cy.contains('go to login page').click();
    cy.get('.title').should('contain', 'Login');
    cy.get('input[type="email"]').type(this.data.email);
    cy.get('input[type="password"]').type(this.data.wrongPassword);
    cy.get('button[type="submit"]').click();
    cy.contains('User with this email and password not found!');
  });
});
