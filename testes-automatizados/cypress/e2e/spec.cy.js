describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Login Page',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
  })
  it('login realizado com sucesso', () =>{
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  });
  it('mostrar mensagem de erro', ()=>{
    cy.get('#username').type('admin');
    cy.get('#password').type('passwords');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });
  it('mostrar mensagem de erro (nome user)', ()=>{
    cy.get('#username').type('joel');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });



})