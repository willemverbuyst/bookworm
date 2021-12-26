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

  enterEmail(email) {
    cy.get(this.getEmail()).type(email);
  }

  enterPassword(password) {
    cy.get(this.getPassword()).type(password);
  }

  clickLoginButton() {
    cy.get(this.getLoginButton()).click();
  }
}

export default LoginPage;
