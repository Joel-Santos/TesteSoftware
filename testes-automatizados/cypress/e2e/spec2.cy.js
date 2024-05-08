describe('Cadastro',()=>{
  const cadastro = {
    nome: "Joel",
    idade: 29,
    endereco: "Rua dos bugadores de código N° 0",
    telefone: '05540051000',
    email: 'joelbugador@email.com' 
  }
  beforeEach(()=>{
    cy.visit('http://localhost:3000/cadastro');
  })
  it('cadastro ok', () =>{
    cy.get('#nome').type('cadastro.nome');
    cy.get('#idade').type(cadastro.idade);
    cy.get('#email').type(cadastro.email);
    cy.get('#telefone').type(cadastro.telefone);
    cy.get('#endereco').type(cadastro.endereco);
    cy.get('button').click();
    cy.get('#message').should('contain', 'Cadastro realizado com sucesso');
  });
  it('cadastro errado', () =>{
    cy.get('#nome').type(cadastro.nome);
    cy.get('#idade').type(cadastro.idade);
    cy.get('#email').type(cadastro.email);
    cy.get('#telefone').type(cadastro.telefone);
    cy.get('#endereco').type(cadastro.endereco);
    cy.get('button').click();
    cy.get('#message').should('contain', 'Cadastro invalido.');
  });

});