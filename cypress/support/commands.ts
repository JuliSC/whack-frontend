/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<any>;
      mount(component: any, options?: Record<string, any>): Chainable<any>;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get('[data-cy="username-input"]').type("khk tlamp");
  cy.get('[data-cy="password-input"]').type("test1");
  cy.get('[data-cy="login-button"]').click();

  cy.get('[data-cy="logout"]').should("exist");
});

export {};
