
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


it('ui-intro--page-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-intro--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--default-story-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-carousel--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--x-3-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-carousel--x-3&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--x-2-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-carousel--x-2&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singleplaylist--default-story-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=features-home-page-components-singleplaylist--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--sizes-default-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-thumbnail--sizes-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--default-link-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-thumbnail--default-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--default-error-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=ui-thumbnail--default-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--menu-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=add-new-addnewmenu--menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--short-menu-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=add-new-addnewmenu--short-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--empty-section-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=add-new-addnewmenu--empty-section&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--no-illustration-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=add-new-addnewmenu--no-illustration&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-card--default-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=shared-bulk-users-card--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-card--no-border-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=shared-bulk-users-card--no-border&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-csv-uploader--primary-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=shared-bulk-users-csv-uploader--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--primary-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=shared-bulk-users-modal-content--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--file-upload-error-a11y-test', () => {
  cy.visit("https://master--62a9fc062d2f2593a024a3a6.chromatic.com/iframe.html?args=&id=shared-bulk-users-modal-content--file-upload-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});

});
