describe('Footer', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:5173/test');
    });
  
    it('Redireciona corretamente para a página Home', () => {
      cy.get('[data-testid="home-icon"]').click();
      cy.url().should('include', '/');
    });
  
    it('Redireciona corretamente para a página de Nova Pintura', () => {
      cy.get('[data-testid="painting-icon"]').click();
      cy.url().should('include', '/new-painting');
    });
  
    it('Redireciona corretamente para a página de Teste', () => {
      cy.get('[data-testid="test-icon"]').click();
      cy.url().should('include', '/test');
    });
  
    it('Redireciona corretamente para a página de Preferências', () => {
      cy.get('[data-testid="preferences-icon"]').click();
      cy.url().should('include', '/preferences');
    });
  });
  