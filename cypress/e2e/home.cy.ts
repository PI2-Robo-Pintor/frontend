describe('Verifica pagina ', () => {
  it('passes', () => {
    cy.visit('https://frontend-omega-beige.vercel.app/')
  })
})

// testar se o header existe
describe('Verifica header', () => {
  it('passes', () => {
    cy.visit('https://frontend-omega-beige.vercel.app/')
    cy.get('header').should('exist')
  })
})

// testar se o footer existe
describe('Verifica footer', () => {
  it('passes', () => {
    cy.visit('https://frontend-omega-beige.vercel.app/')
    cy.get('footer').should('exist')
  })
})

//teste botões
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://frontend-omega-beige.vercel.app/');
  });

  it('Exibe o título corretamente', () => {
    cy.contains('Robô Pintor');
  });

  it('Redireciona para a página de Nova Pintura', () => {
    cy.contains('Nova Pintura').click();
    cy.url().should('include', '/new-painting');
  });

  it('Redireciona para a página de Preferências', () => {
    cy.contains('Preferências').click();
    cy.url().should('include', '/preferences');
  });

  it('Redireciona para a página de Realizar Teste', () => {
    cy.contains('Realizar Teste').click();
    cy.url().should('include', '/test');
  });
});

//testar os botoes do footer
