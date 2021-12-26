Cypress.Commands.add('bookwormLogin', function (email, password) {
  cy.visit('/');
  cy.get('.title').should('contain', 'Home');
  cy.contains('go to login page').click();
  cy.get('.title').should('contain', 'Login');
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
