// https://docs.cypress.io/api/introduction/api.html

// Testing for specific summoners in the table
// Weak to database changes, but extensive and precise
describe("Summoner page (Specific)", () => {
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

// Testing for at least one summoner in the table
// More resistant to database changes, but less precise
describe("Summoner page (Broad)", () => {
  it("table displays summoners from backend", () => {
    cy.visit("/");
    cy.get('[data-cy="summoners-table"]')
      .find("tbody tr")
      .then((row) => {
        //row.length will give you the row count
        expect(row.length).to.be.greaterThan(0);
      });
  });

  it("filters table and displays less summoners", () => {
    cy.visit("/");
    cy.get("#filter").type("💩");

    cy.get('[data-cy="summoners-table"]').find("tbody tr").should("not.exist");
  });
});
