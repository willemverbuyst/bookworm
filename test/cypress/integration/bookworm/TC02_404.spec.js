/// <reference types="cypress" />

import BooksPage from '../pages/booksPage';
import PageNotFoundPage from '../pages/pageNotFoundPage';

describe('Login', function () {
  beforeEach(function () {
    cy.fixture('bookworm').as('data');
  });

  const pageNotFoundPage = new PageNotFoundPage();

  it('Page not found', function () {
    const booksPage = new BooksPage();

    cy.bookwormLogin(this.data.email, this.data.password);
    booksPage.checkTitleIsVisible();
    pageNotFoundPage.visitUnknownUrl();
    pageNotFoundPage.checkTitleIsVisible();
  });
});
