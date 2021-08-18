const DINNING_URL = 'https://disneyland.disney.go.com/dining/#/reservations-accepted/';

describe('My First Test', () => {
    it('will check reservation', () => {

        cy.visit(DINNING_URL);

        cy.get('[name="searchDate"]').clear().type('09/09/2021');

        // cy.get('[id="searchTime-wrapper"]').click();

        cy.get('[data-value="16:30"]').click();

        cy.get('[data-value="12:00"]').click();

        cy.get('[id="partySize-wrapper"]').click();

        cy.get('[data-value="4"]').click();

        cy.get('[name="findTableButton"]').click();

        cy.contains('Wine Country Trattoria');

    });
  })