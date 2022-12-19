import { createRouter, createWebHistory, type Router } from "vue-router";
import router from "../../router";
import NavBar from "../NavBar.vue";

const routes = router.getRoutes();

// Implementing router for testing
let testRouter: Router;
beforeEach(() => {
  testRouter = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  router.push("/");
});

describe("NavBar", () => {
  it("renders properly", () => {
    cy.mount(NavBar, {
      global: {
        plugins: [testRouter],
      },
    });
    cy.get('[data-cy="nav"]').should("exist");
  });
});

// Link data provider
const provideLinks = ["/", "/matches", "/ranks"];

describe("NavBar", () => {
  provideLinks.forEach((link) => {
    it(`renders link with ${link} path`, () => {
      cy.mount(NavBar, {
        global: {
          plugins: [router],
        },
      });
      cy.get(`[data-cy="${link}"]`).should("exist");
    });
  });
});

describe("NavBar links", () => {
  provideLinks.forEach((link) => {
    it(`${link} navigates to correct url`, () => {
      cy.mount(NavBar, {
        global: {
          plugins: [router],
        },
      });
      cy.get(`[data-cy="${link}"]`).click();
      cy.url().should("include", link);
    });
  });
});
