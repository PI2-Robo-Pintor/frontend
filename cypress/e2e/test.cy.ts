// Realizar o teste para verificar se os equipamentos do robo foram testados

describe('Test', () => {
    beforeEach(() => {
        cy.visit('/test');
    });

    it('Teste de componetes', () => {
        cy.get('.sc-erJYPI');
        cy.get('.sc-jUQDaW');
        // fazer um laço para testar cy.get('.sc-jUQDaW > :nth-child(1)').should('exist'); até 3
        cy.get('.sc-jUQDaW > :nth-child(1)').should('exist');
        cy.get('.sc-jUQDaW > :nth-child(2)').should('exist');
        cy.get('.sc-jUQDaW > :nth-child(3)').should('exist');
        cy.get('.sc-jUQDaW > :nth-child(4)').should('exist');

        // testar se o acionamento cy.get('.sc-jUQDaW > :nth-child(1) > .sc-HuJuN') está funcionando
        cy.get('.sc-jUQDaW > :nth-child(1) > .sc-HuJuN').click();
        cy.get('.sc-jUQDaW > :nth-child(2) > .sc-HuJuN').click();
        cy.get('.sc-jUQDaW > :nth-child(3) > .sc-HuJuN').click();
        cy.get('.sc-jUQDaW > :nth-child(4) > .sc-HuJuN').click();
    });
});