/* eslint-disable @typescript-eslint/no-namespace */
import { mount } from "cypress/vue";
import { createPinia } from "pinia";
import { createRouter, createMemoryHistory } from "vue-router";
import { useUserStore } from "../../src/stores/user";
import router from "../../src/router/index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { App } from "vue";

const routes = router.getRoutes();

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

Cypress.Commands.add("mount", (component, options = {}) => {
  const router = createRouter({
    routes,
    history: createMemoryHistory(),
  });

  const installRouterPlugin = (app: App) => {
    app.use(router);
  };

  options = {
    global: {
      plugins: [installRouterPlugin],
    },
    ...options,
  };

  options.path && cy.wrap(router.push(options.path));

  const pinia = createPinia();
  options.store || useUserStore(pinia);

  return mount(component, options);
});

export {};
