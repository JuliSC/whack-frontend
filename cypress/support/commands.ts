/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-namespace

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<any>;
    }
  }
}

// -- This is a parent command --
Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get('[data-cy="username-input"]').type("khk tlamp");
  cy.get('[data-cy="password-input"]').type("test1");
  cy.get('[data-cy="login-button"]').click();

  cy.get('[data-cy="logout"]').should("exist");
});

export {};
