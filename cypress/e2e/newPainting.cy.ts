import { type } from "os";

describe('NewPainting', () => {
  beforeEach(() => {
    cy.visit('/new-painting');
  });

  it('Verificar os títulos e testar o preenchimento da altura min e max', () => {
    cy.contains('Robô Pintor');
    cy.contains('Nova Pintura');
    cy.contains('Altura máxima');
    cy.get(':nth-child(1) > .sc-ckeRpf').should('exist');
    //apagaro valor preenchido da altura máxima
    cy.get(':nth-child(1) > .sc-ckeRpf').clear();
    cy.get(':nth-child(1) > .sc-ckeRpf').type('100');
    cy.get(':nth-child(1) > .sc-ckeRpf').should('have.value', '100');
    cy.contains('Altura mínima');
    cy.get(':nth-child(2) > .sc-ckeRpf').should('exist');
    //apagaro valor preenchido da altura mínima
    cy.get(':nth-child(2) > .sc-ckeRpf').clear();
    cy.get(':nth-child(2) > .sc-ckeRpf').type('50');
    cy.get(':nth-child(2) > .sc-ckeRpf').should('have.value', '50');
    cy.contains('Tipo de pintura');  
    cy.get('.sc-gPvXVi').each($select => {
      const options = $select.find('option');
  
      options.each((index, option) => {
        cy.wrap($select).select(option.value);
        cy.wrap($select).should('have.value', option.value);
      });
    });
  });

  // Redireciona para a página de Nova Pintura e para a pintura
  it('Redireciona para a página de Nova Pintura', () => {
    cy.contains('Iniciar Pintura').click();
    cy.url().should('include', '/ongoing-painting');
    cy.get('.sc-erJYPI').should('exist');
    cy.get('.sc-beRrhl > :nth-child(1)').should('exist');
    cy.get('.sc-beRrhl > :nth-child(2)').should('exist');
    cy.get('.sc-beRrhl > :nth-child(3)').should('exist');
    cy.contains('Parar Pintura').click();
    cy.url().should('include', '/new-painting');
  }); 

});
