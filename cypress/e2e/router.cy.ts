// https://docs.cypress.io/api/introduction/api.html

// Testing for specific summoners in the table
// Weak to database changes, but extensive and precise
describe("Router", () => {
  it("redirects to / on unimplemented routes", () => {
    cy.visit("/79643qfgviaos7udyfvcq39476cv97THISISNOTAVALIDROUTEasdfasdfadsf");
    cy.url().should("include", "/");
  });
});
