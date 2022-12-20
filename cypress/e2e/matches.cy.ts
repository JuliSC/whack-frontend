// https://docs.cypress.io/api/introduction/api.html

describe("Matches page", () => {
  describe("User logged in ", () => {
    beforeEach(() => {
      cy.login();
    });

    // Testing for specific values in the table
    // Weak to database changes, but extensive and precise
    describe("Matches pages (Specific)", () => {
      it("displays all matches", () => {
        cy.visit("/matches");
        cy.get('[data-cy="match-1"]').should("exist");
        cy.get('[data-cy="match-2"]').should("exist");
      });

      it("clicking match row redirects to match details page", () => {
        cy.visit("/matches");
        cy.get('[data-cy="match-2"]').click();
        cy.url().should("include", "/matches/2");
      });

      it("match details page shows participants", () => {
        cy.visit("/matches");
        cy.get('[data-cy="match-2"]').click();

        cy.get('[data-cy="khk tlamp"]').should("exist");
        cy.get('[data-cy="drî±chun"]').should("exist");
      });
    });

    // Testing for at least one row in the table
    // More resistant to database changes, but less precise
    describe("Matches pages (Broad)", () => {
      it("displays all matches", () => {
        cy.visit("/matches");
        cy.get('[data-cy="matches-table"]')
          .find("tbody tr")
          .then((row) => {
            //row.length will give you the row count
            expect(row.length).to.be.greaterThan(0);
          });
      });

      it("clicking match row redirects to match details page", () => {
        cy.visit("/matches");
        cy.get('[data-cy="matches-table"]').find("tbody tr").first().click();
        cy.url().should("match", /\/matches\/\d+/);
      });

      it("match details page shows participants", () => {
        cy.visit("/matches");
        cy.get('[data-cy="match-2"]').click();

        cy.get('[data-cy="participants-table"]')
          .find("tbody tr")
          .then((row) => {
            //row.length will give you the row count
            expect(row.length).to.be.greaterThan(0);
          });
      });
    });
  });

  describe("User logged out", () => {
    it("table displays no matches", () => {
      cy.visit("/");
      cy.get('[data-cy="summoners-table"]')
        .find("tbody tr")
        .should("not.exist");
    });
  });
});
