
describe('Storybook Accessibility Tests', () => {
  
it('docs-chromatic--page-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=docs-chromatic--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('docs-linter--page-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=docs-linter--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});

});
