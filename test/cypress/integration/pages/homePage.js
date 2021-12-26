class HomePage {
  getTitle() {
    return '.title';
  }

  getGotoLoginLink() {
    return 'go to login page';
  }

  checkTitleIsVisible() {
    cy.get(this.getTitle()).should('contain', 'Home');
  }

  clickOnGotoLoginLink() {
    cy.contains(this.getGotoLoginLink()).click();
  }
}

export default HomePage;
