class PageNotFoundPage {
  getTitle() {
    return '.title';
  }

  getUnknownUrl() {
    return '/unknown';
  }

  checkTitleIsVisible() {
    cy.get(this.getTitle()).should('contain', '404');
  }

  visitUnknownUrl() {
    cy.visit(this.getUnknownUrl());
  }
}

export default PageNotFoundPage;
