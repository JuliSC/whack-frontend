// https://docs.cypress.io/api/introduction/api.html

describe("Login/logout", () => {
  it("users can log in with enter key", () => {
    cy.visit("/login");

    cy.get('[data-cy="username-input"]').type("khk tlamp");
    cy.get('[data-cy="password-input"]').type("test1{enter}");

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.get('[data-cy="logout"]').should("exist");
  });

  it("users can log in with login button", () => {
    cy.visit("/login");

    cy.get('[data-cy="username-input"]').type("khk tlamp");
    cy.get('[data-cy="password-input"]').type("test1");
    cy.get('[data-cy="login-button"]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.get('[data-cy="logout"]').should("exist");
  });

  it("users can log out", () => {
    cy.visit("/");
    cy.get('[data-cy="login"]').should("exist");
  });
});
