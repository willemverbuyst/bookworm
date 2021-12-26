class BooksPage {
  getTitle() {
    return '.title';
  }

  checkTitleIsVisible() {
    cy.get(this.getTitle()).should('contain', 'Books');
  }
}

export default BooksPage;
