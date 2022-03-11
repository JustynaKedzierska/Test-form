// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


beforeEach(() => {
    cy.visit('http://serwer1419259.home.pl/tester/index.php/site/form/52')
    cy.get('#logo').contains('Formularz zgłoszeniowy – kwestionariusz osobowy').should('be.visible')
    cy.get('.text-center').contains('10.12.2019 12:23').should('be.visible')
})

