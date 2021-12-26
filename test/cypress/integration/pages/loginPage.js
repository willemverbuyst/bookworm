class LoginPage {
  getEmail() {
    return 'input[type="email"]';
  }

  getPassword() {
    return 'input[type="password"]';
  }

  getLoginButton() {
    return 'button[type="submit"]';
  }

  getErrorMessage() {
    return 'User with this email and password not found!';
  }

  getTitle() {
    return '.title';
  }

  checkTitleIsVisible() {
    cy.get(this.getTitle()).should('contain', 'Login');
  }

  enterEmail(email) {
    cy.get(this.getEmail()).type(email);
  }

  enterPassword(password) {
    cy.get(this.getPassword()).type(password);
  }

  clickLoginButton() {
    cy.get(this.getLoginButton()).click();
  }

  displayErrorMessage() {
    cy.contains(this.getErrorMessage());
  }
}

export default LoginPage;
