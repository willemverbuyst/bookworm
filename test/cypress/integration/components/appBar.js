class AppBar {
  getLogOutButton() {
    return 'log out';
  }

  clickLogOutButton() {
    cy.contains(this.getLogOutButton()).click();
  }
}

export default AppBar;
