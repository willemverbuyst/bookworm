class HomePage {
  getGotoLoginLink() {
    return 'go to login page';
  }

  getTitle() {
    return '.title';
  }

  clickOnGotoLoginLink() {
    cy.contains(this.getGotoLoginLink()).click();
  }

  checkTitleIsVisible() {
    cy.get(this.getTitle()).should('contain', 'Home');
  }
}

export default HomePage;
