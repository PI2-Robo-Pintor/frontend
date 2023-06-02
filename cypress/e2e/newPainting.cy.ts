describe('NewPainting', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/new-painting');
    });
  
    it('Renderiza corretamente os campos de entrada', () => {
      cy.get('[data-testid="max-height-input"]').should('exist');
      cy.get('[data-testid="min-height-input"]').should('exist');
      cy.get('[data-testid="paint-option-select"]').should('exist');
    });
  
    it('Permite preencher e submeter os valores dos campos', () => {
      cy.get('[data-testid="max-height-input"]').type('100');
      cy.get('[data-testid="min-height-input"]').type('50');
      cy.get('[data-testid="paint-option-select"]').select('Watercolor');
  
      cy.get('[data-testid="start-painting-button"]').click();
  
      cy.url().should('include', 'http://localhost:5173/ongoing-painting');
    });
  
    it('Armazena as informações de pintura no localStorage', () => {
      cy.get('[data-testid="max-height-input"]').type('100');
      cy.get('[data-testid="min-height-input"]').type('50');
      cy.get('[data-testid="paint-option-select"]').select('Oil');
  
      cy.get('[data-testid="start-painting-button"]').click();
  
      cy.window().then((window) => {
        const paintingInfos = JSON.parse(window.localStorage.getItem('paintingInfos'));
        expect(paintingInfos).to.have.lengthOf.at.least(1);
        expect(paintingInfos[0]).to.deep.equal({
          maxHeight: '100',
          minHeight: '50',
          paintOption: 'Oil'
        });
      });
    });
  });
  