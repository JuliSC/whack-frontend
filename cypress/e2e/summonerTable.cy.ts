// https://docs.cypress.io/api/introduction/api.html

describe("Summoner page", () => {
  describe("User logged in ", () => {
    beforeEach(() => {
      cy.login();
    });

    // Testing for specific summoners in the table
    // Weak to database changes, but extensive and precise
    describe("Specific", () => {
      it("table displays summoners from backend", () => {
        cy.login();
        cy.get('[data-cy="khk tlamp"]').should("exist");
        cy.get('[data-cy="dayns"]').should("exist");
        cy.get('[data-cy="drî±chun"]').should("exist");
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq("/");
        });
      });

      it("filters table and displays some summoners, but not all", () => {
        cy.login();
        cy.get('[data-cy="filter"]').type("khk");

        cy.get('[data-cy="khk tlamp"]').should("exist");
        cy.get('[data-cy="dayns"]').should("not.exist");
        cy.get('[data-cy="drî±chun"]').should("not.exist");
      });
    });

    // Testing for the number of summoners in the table
    // More resistant to database changes, but less precise
    describe("Broad", () => {
      it("table displays summoners from backend", () => {
        cy.get('[data-cy="summoners-table"]')
          .find("tbody tr")
          .then((row) => {
            //row.length will give you the row count
            expect(row.length).to.be.greaterThan(0);
          });
      });

      it("filters table and displays less summoners", () => {
        cy.get('[data-cy="filter"]').type("💩");

        cy.get('[data-cy="summoners-table"]')
          .find("tbody tr")
          .should("not.exist");
      });
    });
  });
  describe("User logged out", () => {
    it("table displays no summoners", () => {
      cy.visit("/");
      cy.get('[data-cy="summoners-table"]')
        .find("tbody tr")
        .should("not.exist");
    });
  });
});
