// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// login.spec.js
describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should successfully log in with correct credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Welcome to the Dashboard!');
  });

  it('should display an error message for incorrect credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('wrongpassword');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Invalid credentials. Try again.');
  });
});
