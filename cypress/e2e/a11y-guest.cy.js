import {config, instances, users, pages} from "../../support/commands"

describe('a11y-tests-guest', () => {
  beforeEach(() => {
  });

  it('visit root page as guest', () => {
      cy.visit(`${instances.readOnlyInstance.url}`);
      cy.injectAxe();
      cy.checkAccessibility();
    });

    it('visit login as guest', () => {
        cy.visit(`${instances.readOnlyInstance.url}/${pages.login}`);
        cy.injectAxe();
        cy.checkAccessibility();
    });
});


