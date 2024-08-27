import {config, instances, users, pages} from "../../support/commands"

describe('storybook-tests', () => {
  beforeEach(() => {
  });

  it('features-channel-page--vertical-view', () => {
      cy.visit(`${instances.storybook.url}`);
      cy.injectAxe();
      cy.checkAccessibility();
    });
});


//we should use https://github.com/component-driven/cypress-axe/issues/23 do ignore issues that we are not going to test
//
// cy.checkA11y(undefined, {
//     rules: {
//         'color-contrast': { enabled: false },
//     },
// })


