// https://docs.cypress.io/api/introduction/api.html

describe("Testing summoner table filter", () => {
  it("table displays summoners from backend", () => {
    cy.visit("/");
    cy.get('[data-cy="khk tlamp"]').should("exist");
    cy.get('[data-cy="dayns"]').should("exist");
    cy.get('[data-cy="drî±chun"]').should("exist");
  });

  it("filters table and displays some summoners, but not all", () => {
    cy.visit("/");
    cy.get("#filter").type("khk");

    cy.get('[data-cy="khk tlamp"]').should("exist");
    cy.get('[data-cy="dayns"]').should("not.exist");
    cy.get('[data-cy="drî±chun"]').should("not.exist");
  });
});
