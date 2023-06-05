describe('Preferences', () => {
    it('Renderiza os botões de preferência corretamente', () => {
      cy.visit('/new-painting');
      cy.contains('Iniciar Pintura').click();
      cy.visit('/preferences');
  
      // Verifica se os botões de preferência existem e estão visíveis
      cy.get('.sc-cNGgOM').should('be.visible');
  
      // Verifica se os botões de preferência estão presentes uma vez
      cy.get('.sc-kpjZlD').each(($button) => {
        cy.wrap($button).should('be.visible');
      });
  
      // Verifica se os elementos específicos dentro dos botões de preferência existem
      cy.get('.sc-kpjZlD').each(($button) => {
        cy.wrap($button).within(() => {
          cy.get(':nth-child(1)').should('exist');
          cy.get(':nth-child(2)').should('exist');
        });
      });
    });
  });
  