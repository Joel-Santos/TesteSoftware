// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// login.spec.js
// login.spec.js
describe('Página de Login', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('deve logar com sucesso com credenciais corretas', () => {
      cy.get('#username').type('admin');
      cy.get('#password').type('password');
      cy.get('button').click();
      cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  });

  it('deve exibir uma mensagem de erro para credenciais incorretas', () => {
      cy.get('#username').type('admin');
      cy.get('#password').type('senhaerrada');
      cy.get('button').click();
      cy.get('#message').should('contain', 'Credenciais inválidas. Tente novamente.');
  });
});

