import {config, instances, users, pages} from "../../support/commands"

describe('a11y-logged-user', () => {
  beforeEach(() => {
  });

  it('visit root page', () => {
      cy.visit(`${instances.readOnlyInstance.url}`);
      cy.login(users.readOnlyInstance.lotsOfCertificates);
      cy.injectAxe();
      cy.checkAccessibility();
    });

    it('visit login page', () => {
        cy.visit(`${instances.readOnlyInstance.url}/${pages.login}`);
        cy.login(users.readOnlyInstance.lotsOfCertificates);
        cy.injectAxe();
        cy.checkAccessibility();
    });
});


