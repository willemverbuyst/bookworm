/// <reference types="cypress" />

import BooksPage from '../pages/booksPage';

describe('BooksPage', function () {
  beforeEach(function () {
    cy.fixture('bookworm').as('data');
  });

  const booksPage = new BooksPage();

  it('Page not found', function () {
    cy.bookwormLogin(this.data.email, this.data.password);
    cy.intercept('GET', '**/books', { fixture: 'books.json' });
    booksPage.checkTitleIsVisible();
    cy.xpath("//div[normalize-space()='Fake Book 1']").should('be.visible');
    cy.xpath("//div[normalize-space()='Fake Book 2']").should('be.visible');
    cy.xpath("//div[normalize-space()='Fake Book 3']").should('not.exist');
  });
});
