describe('Cadastro',()=>{
  const cadastro = {
    nome: "Joel",
    idade: 29,
    endereco: "Rua dos bugadores de código N° 0",
    telefone: '05540051000',
    email: 'joelbugador@email.com' 
  }
  beforeEach(()=>{
    cy.visit('http://localhost:3002/cadastro');
   })

  //  it('nenhum campo preenchido', ()=>{
  //     cy.get('form').submit();
  //     cy.get('.error-message').should('contain','Nome de usuário é obrigatório');
  //     cy.get('.error-message').should('contain','Email é obrigatório');
  //     cy.get('.error-message').should('contain','Senha é obrigatória');
  //  });
   it('Valida mensagens de erro com campos vazios', () => {
    cy.get('input[type="submit"]').click();
    cy.get('span.error-message').each(($el) => {
        cy.wrap($el).should('contain', 'é obrigatóri');
    });
 });
    it('campo nome obrigatorio', () =>{
      //cy.get('#username')
      cy.get('#email').type('umdialegalparabugarcodigos@codigo.br')
      cy.get('#password').type('bugadordeplantao');
      cy.get('form').submit();
      cy.get('.error-message').should('contain','Nome de usuário é obrigatório');
    })
  it('campo email obrigatorio', ()=>{
    cy.get('#username').type('O senhor bugador de código da silva');
    //cy.get('#email').type('umdialegalparabugarcodigos@codigo.br')
    cy.get('#password').type('bugadordeplantao');
    cy.get('form').submit();
    cy.get('.error-message').should('contain','Email é obrigatório');

  });
  it('campo senha obrigatorio', ()=>{
    cy.get('#username').type('O senhor bugador de código da silva');
    cy.get('#email').type('umdialegalparabugarcodigos@codigo.br')
    //cy.get('#password').type('bugadordeplantao');
    cy.get('form').submit();
    cy.get('.error-message').should('contain','Senha é obrigatória');
  });

  it('todos os campos preenchidos corretamente', ()=>{
    cy.get('#username').type('O senhor bugador de código da silva');
    cy.get('#email').type('umdialegalparabugarcodigos@codigo.br')
    cy.get('#password').type('bugadordeplantao');
    cy.get('form').submit();
    cy.url().should('include', '/'); // Verifique se a URL contém '/success'
    cy.get('.success').should('contain', 'Cadastro realizado com sucesso');
    
  })

});