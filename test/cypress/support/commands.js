import LoginPage from '../integration/pages/loginPage';

Cypress.Commands.add('bookwormLogin', function (email, password) {
  const loginPage = new LoginPage();

  cy.visit('/');
  cy.get('.title').should('contain', 'Home');
  cy.contains('go to login page').click();
  cy.get('.title').should('contain', 'Login');
  loginPage.enterEmail(email);
  loginPage.enterPassword(password);
  loginPage.clickLoginButton();
});
