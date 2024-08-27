
describe('Storybook Accessibility Tests', () => {
  
it('docs-chromatic--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=docs-chromatic--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('docs-linter--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=docs-linter--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-intro--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-intro--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--default-story-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--x-3-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel--x-3&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel--x-2-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel--x-2&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singleplaylist--default-story-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singleplaylist--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--sizes-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-thumbnail--sizes-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--default-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-thumbnail--default-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-thumbnail--default-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-thumbnail--default-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=add-new-addnewmenu--menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--short-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=add-new-addnewmenu--short-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--empty-section-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=add-new-addnewmenu--empty-section&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('add-new-addnewmenu--no-illustration-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=add-new-addnewmenu--no-illustration&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-card--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-card--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-card--no-border-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-card--no-border&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-csv-uploader--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-csv-uploader--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--file-upload-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--file-upload-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--file-uploaded-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--file-uploaded&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--users-to-show-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--users-to-show&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--all-users-invited-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--all-users-invited&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-modal-content--unexpected-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-modal-content--unexpected-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-progress--fake-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-progress--fake&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-status--single-invite-success-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-status--single-invite-success&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-bulk-users-status--error-already-registered-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-bulk-users-status--error-already-registered&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-status--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-status--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-confirmationmodal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-confirmationmodal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-editform--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-editform--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-bulkactions--various-statuses-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-bulkactions--various-statuses&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-bulkactions--all-ready-or-processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-bulkactions--all-ready-or-processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--pre-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--pre-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--in-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--in-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--ready-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--ready&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--failed-processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--failed-processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--failed-uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--failed-uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--canceled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--canceled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--processing-no-thumbnail-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--processing-no-thumbnail&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow--after-data-save-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow--after-data-save&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--pre-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--pre-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--in-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--in-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--ready-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--ready&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--failed-processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--failed-processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--failed-uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--failed-uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-nameandstatus--canceled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-nameandstatus--canceled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--pre-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--pre-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--in-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--in-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--processing-no-edit-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--processing-no-edit-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--ready-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--ready&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--failed-processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--failed-processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--failed-processing-no-remove-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--failed-processing-no-remove-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--failed-uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--failed-uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--canceled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--canceled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-rowactions--published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-rowactions--published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--pre-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--pre-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--in-queue-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--in-queue&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--ready-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--ready&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--ready-audio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--ready-audio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--failed-processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--failed-processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--failed-uploading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--failed-uploading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerow-thumbnail--canceled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerow-thumbnail--canceled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerows--many-files-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerows--many-files&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerows--single-file-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerows--single-file&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-filerows--is-kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-filerows--is-kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories--media-categories-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories--media-categories&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories--external-media-categories-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories--external-media-categories&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-category-bubbles--many-categories-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-category-bubbles--many-categories&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-category-bubbles--few-categories-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-category-bubbles--few-categories&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-category-bubbles--no-categories-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-category-bubbles--no-categories&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-external-published-categories--single-app-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-external-published-categories--single-app&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-external-published-categories--several-apps-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-external-published-categories--several-apps&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-external-published-categories--no-apps-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-external-published-categories--no-apps&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-published-categories--many-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-published-categories--many-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-published-categories--few-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-published-categories--few-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-published-categories--private-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-published-categories--private-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-media-categories-published-categories--no-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-media-categories-published-categories--no-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--linked-private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--linked-private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--linked-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--linked-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-indicator--published-with-warning-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-indicator--published-with-warning&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--public-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--public&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--no-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--no-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--allow-unpublish-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--allow-unpublish-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--warning-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--warning&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--unlisted-to-private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--unlisted-to-private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--published-to-private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--published-to-private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--private-to-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--private-to-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--published-to-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--published-to-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--unlisted-to-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--unlisted-to-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--private-to-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--private-to-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-modal-manager--published-to-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-modal-manager--published-to-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-private-modal--unlisted-to-private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-private-modal--unlisted-to-private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-private-modal--published-to-private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-private-modal--published-to-private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--unlisted-to-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--unlisted-to-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--private-to-published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--private-to-published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--published-update-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--published-update&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--kaf-published-update-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--kaf-published-update&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--published-modal-container-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--published-modal-container&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-locations-count--one-locations-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-locations-count--one-locations-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-locations-count--many-locations-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-locations-count--many-locations-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-locations-count--no-locations-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-locations-count--no-locations-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations--kms-publish-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations--kms-publish-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations--kaf-publish-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations--kaf-publish-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--kms-publish-tabs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--kms-publish-tabs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--no-galleries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--no-galleries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--no-channels-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--no-channels&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--kaf-publish-tabs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs--kaf-publish-tabs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--no-channel-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--no-channel-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--no-gallery-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-search--no-gallery-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--with-pending-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--with-pending&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--with-rejected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--with-rejected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--no-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-channels-tab--no-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--pending-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--pending&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--rejected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--rejected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--pending-rejected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-exceptions--pending-rejected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--with-pending-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--with-pending&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--with-rejected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--with-rejected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--missing-gallery-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--missing-gallery&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--no-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-galleries-tab--no-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--channels-pending-alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--channels-pending-alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--channels-rejected-alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--channels-rejected-alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--galleriesl-pending-alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--galleriesl-pending-alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--galleriesl-rejected-alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-publish-tabs-pending-alert--galleriesl-rejected-alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--many-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--many-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--few-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--few-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--private-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--private-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--no-locations-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal-publish-locations-published-categories--no-locations&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-published-modal--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-published-modal--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-unlisted-modal--private-to-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-unlisted-modal--private-to-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-entry-publish-menu-modals-unlisted-modal--published-to-unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-entry-publish-menu-modals-unlisted-modal--published-to-unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-agenda-component--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-agenda-component--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-agenda-component--disabled-mode-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-agenda-component--disabled-mode&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-agenda-component--empty-sessions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-agenda-component--empty-sessions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-filterbar--with-date-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-filterbar--with-date-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-filterbar--no-date-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-filterbar--no-date-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-filterbar--with-values-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-filterbar--with-values&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventlistitemmodal--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventlistitemmodal--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventslistitemtags--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventslistitemtags--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventslistitemtags--long-strings-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventslistitemtags--long-strings&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventslistitemtags--show-4-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventslistitemtags--show-4&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventslistitemtags--count-rest-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventslistitemtags--count-rest&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-eventslistitemtags--clickable-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-eventslistitemtags--clickable&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--past-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--past-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--past-without-vod-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--past-without-vod&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--past-without-vod-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--past-without-vod-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--live-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--live-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--future-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--future-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--many-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--many-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--many-presenters-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--many-presenters-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--long-texts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--long-texts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--long-texts-with-thumb-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--long-texts-with-thumb&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--long-description-no-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--long-description-no-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--no-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--no-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--long-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--long-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item--disabled-mode-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item--disabled-mode&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-actionsection--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-actionsection--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-actionsection--with-cta-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-actionsection--with-cta&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-actionsection--not-in-watch-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-actionsection--not-in-watch-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-actionsection--no-watch-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-actionsection--no-watch-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-actionsection--no-show-more-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-actionsection--no-show-more&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-list-event-list-item-mailmenu--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-list-event-list-item-mailmenu--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-eventlist--present-past-and-future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-eventlist--present-past-and-future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-agenda-eventlist--only-past-sessions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-agenda-eventlist--only-past-sessions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenter-large-list--presenters-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenter-large-list--presenters-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenter-large-list--presenters-list-many-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenter-large-list--presenters-list-many&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenter-large-list--presenters-list-long-titles-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenter-large-list--presenters-list-long-titles&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenterlarge--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenterlarge--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenterlarge--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenterlarge--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenterlarge--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenterlarge--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenter--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenter--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenter--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenter--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenter--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenter--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-presenter--long-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-presenter--long-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list-no-popover--presenters-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list-no-popover--presenters-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list-no-popover--presenters-list-many-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list-no-popover--presenters-list-many&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list--presenters-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list--presenters-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list--presenters-list-many-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list--presenters-list-many&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list--presenters-list-long-titles-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list--presenters-list-long-titles&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('event-platform-event-presenter-event-presenters-list--presenters-list-translucent-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=event-platform-event-presenter-event-presenters-list--presenters-list-translucent&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--footer-with-header-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--footer-with-header-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--footer-with-text-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--footer-with-text-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--footer-with-button-text-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--footer-with-button-text-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--footer-with-button-url-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--footer-with-button-url-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--footer-with-only-bottom-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--footer-with-only-bottom-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--long-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--long-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-footer--colors-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-footer--colors&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--large-image-small-logo-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--large-image-small-logo&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--large-logo-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--large-logo&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--no-target-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--no-target&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headerlogo--no-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headerlogo--no-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--dark-theme-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--dark-theme&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--dark-theme-horizontal-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--dark-theme-horizontal&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--transparent-theme-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--transparent-theme&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--no-create-items-with-login-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--no-create-items-with-login&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--no-create-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--no-create-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--horizontal-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--horizontal-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--horizontal-menu-top-links-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--horizontal-menu-top-links-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--horizontal-menu-xl-top-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--horizontal-menu-xl-top-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--horizontal-menu-long-content-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--horizontal-menu-long-content&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--no-logo-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--no-logo&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--no-logo-with-many-menu-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--no-logo-with-many-menu-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--locales-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--locales-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--clear-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--clear-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--clear-menu-with-cta-and-locales-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--clear-menu-with-cta-and-locales&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--in-layout-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--in-layout&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--badges-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--badges-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--sticky-dark-theme-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--sticky-dark-theme&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-headermenu--sticky-transparent-theme-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-headermenu--sticky-transparent-theme&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-localemenu--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-localemenu--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-menu--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-menu--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-menu--sub-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-menu--sub&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-sidebaritem--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-sidebaritem--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-sidebaritem--active-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-sidebaritem--active&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-sidebaritem--long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-sidebaritem--long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-sidebaritem--with-sub-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-sidebaritem--with-sub&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-sidebaritem--unclickable-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-sidebaritem--unclickable&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-togglemenubutton--open-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-togglemenubutton--open&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-sidebarmenu-togglemenubutton--closed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-sidebarmenu-togglemenubutton--closed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-usermenu--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-usermenu--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-usermenu--custom-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-usermenu--custom-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-addnewmenu--menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-addnewmenu--menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-headermenu-addnewmenu--logged-out-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-headermenu-addnewmenu--logged-out-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-hooks-usethrottledvalue--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-hooks-usethrottledvalue--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-kaf-addnewmenu--menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-kaf-addnewmenu--menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-kaf-addnewmenu--logged-out-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-kaf-addnewmenu--logged-out-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-kaf-addnewmenu--less-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-kaf-addnewmenu--less-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-kmsconnect--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-kmsconnect--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginsiteheader-loginsiteheader--full-features-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginsiteheader-loginsiteheader--full-features&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginsiteheader-loginsiteheader--no-bg-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginsiteheader-loginsiteheader--no-bg-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginsiteheader-loginsiteheader--no-locales-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginsiteheader-loginsiteheader--no-locales&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-menu-addtoplaylistmodal--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-menu-addtoplaylistmodal--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-menu-addtoplaylistmodal-createplaylist--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-menu-addtoplaylistmodal-createplaylist--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-menu-addtoplaylistmodal-listitem--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-menu-addtoplaylistmodal-listitem--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-changeowner--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-changeowner--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-changeownercontainer--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-changeownercontainer--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-setcollaborationcontainer--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-setcollaborationcontainer--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-setcollaborationcontainer--with-custom-role-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-setcollaborationcontainer--with-custom-role&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--with-duration-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--with-duration&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--with-scheduling-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--with-scheduling&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--primary-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--primary-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--with-duration-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--with-duration-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-list--with-scheduling-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-list--with-scheduling-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--with-scheduling-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--with-scheduling&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--active-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--active&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--primary-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--primary-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--long-title-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--long-title-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-search--with-scheduling-gs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-search--with-scheduling-gs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-scheduling--same-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-scheduling--same-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-scheduling--different-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-scheduling--different-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-searchresults--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-searchresults--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediacard-searchresults--secondary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediacard-searchresults--secondary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediagrid--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediagrid--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediagrid--with-pagination-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediagrid--with-pagination&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-mediagrid--with-pagination-query-param-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-mediagrid--with-pagination-query-param&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-media-grid--media-grid-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-media-grid--media-grid-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-managemessagingsubsciption--unsubscribe-messaging-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-managemessagingsubsciption--unsubscribe-messaging&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-managemessagingsubsciption--subscribe-messaging-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-managemessagingsubsciption--subscribe-messaging&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('players-player--player-v-3-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=players-player--player-v-3&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('players-player--live-player-v-3-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=players-player--live-player-v-3&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationsiteheader--full-features-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationsiteheader--full-features&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationsiteheader--no-bg-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationsiteheader--no-bg-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationsiteheader--no-header-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationsiteheader--no-header-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationsiteheader--no-locales-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationsiteheader--no-locales&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('theme-system-width--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=theme-system-width--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-ad-images--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-ad-images--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-ad-images--broken-aspect-ratio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-ad-images--broken-aspect-ratio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-ad-images--left-new-tab-right-current-tab-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-ad-images--left-new-tab-right-current-tab&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-animatedaiillustration--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-animatedaiillustration--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-autocollapse--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-autocollapse--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-badge--small-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-badge--small&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-badge--medium-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-badge--medium&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-badge--small-light-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-badge--small-light&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-badge--medium-light-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-badge--medium-light&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-box-link--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-box-link--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel-carouselitem--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel-carouselitem--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel-carouselitem--no-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel-carouselitem--no-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel-carouselitem--future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel-carouselitem--future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-carousel-carouselitem--live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-carousel-carouselitem--live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-clicktocopy--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-clicktocopy--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-checkboxfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-checkboxfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-checkboxfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-checkboxfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-checkboxfield--disabled-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-checkboxfield--disabled-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-checkboxfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-checkboxfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-datefield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-datefield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-datefield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-datefield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-datewithtimefield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-datewithtimefield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-datewithtimefield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-datewithtimefield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-multiselectfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-multiselectfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-multiselectfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-multiselectfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-multitextfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-multitextfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-multitextfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-multitextfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-richtextfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-richtextfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-richtextfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-richtextfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-selectfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-selectfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-selectfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-selectfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-selectfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-selectfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-tagsfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-tagsfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-controlled-form-tagsfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-controlled-form-tagsfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-drawer--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-drawer--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrieslist--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrieslist--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrylistitem--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrylistitem--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrylistitem--no-actions-1-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrylistitem--no-actions-1&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrylistitem--no-actions-2-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrylistitem--no-actions-2&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrylistitem--with-speakers-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrylistitem--with-speakers&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-entrylist-entrylistitemaction--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-entrylist-entrylistitemaction--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-error-boundary--default-error-boundary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-error-boundary--default-error-boundary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-error-boundary--silent-error-boundary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-error-boundary--silent-error-boundary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-error-boundary--skeleton-error-boundary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-error-boundary--skeleton-error-boundary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-datefieldwithtime--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-datefieldwithtime--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-formlabelwithdescription--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-formlabelwithdescription--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-formlabelwithdescription--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-formlabelwithdescription--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-formlabelwithdescription--no-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-formlabelwithdescription--no-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-form-label--font-weight-bold-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-form-label--font-weight-bold&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-form-label--font-weight-normal-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-form-label--font-weight-normal&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-inputwithcharcount--multiline-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-inputwithcharcount--multiline&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-inputwithcharcount--multiline-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-inputwithcharcount--multiline-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-inputwithcharcount--input-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-inputwithcharcount--input&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--multi-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--multi-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--min-length-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--min-length&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--free-solo-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--free-solo&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--single-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--single&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-liveautocomplete--single-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-liveautocomplete--single-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multiselecthoriz--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multiselecthoriz--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multiselecthoriz--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multiselecthoriz--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multiselecthoriz--no-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multiselecthoriz--no-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multiselect--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multiselect--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multiselect--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multiselect--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multitextfield--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multitextfield--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multitextfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multitextfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-multitextfield-singletext--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-multitextfield-singletext--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-text-field-loading--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-text-field-loading--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--partial-width-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--partial-width&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--placeholder-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--placeholder&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--readonly-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--readonly&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--autocomplete-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--autocomplete&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-form-text-field--on-change-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-form-text-field--on-change&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-mediaschedule--same-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-mediaschedule--same-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-mediaschedule--different-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-mediaschedule--different-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-popper--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-popper--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-popper--side-popper-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-popper--side-popper&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-fakeprogressbar--fake-with-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-fakeprogressbar--fake-with-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-fakeprogressbar--fake-no-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-fakeprogressbar--fake-no-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-qrcodecontainer--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-qrcodecontainer--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-searchform--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-searchform--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-searchinput--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-searchinput--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-searchinput--with-icon-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-searchinput--with-icon&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-searchinput--disabled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-searchinput--disabled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-searchinput--on-white-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-searchinput--on-white&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-details-container--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-details-container--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-details-container--scheduled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-details-container--scheduled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-details-container--kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-details-container--kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-details-skeleton--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-details-skeleton--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-searchresults--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-searchresults--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-searchresults--no-keyword-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-searchresults--no-keyword&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-searchresults-simplesearchresult--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-searchresults-simplesearchresult--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-searchresults-tagsearchresult--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-searchresults-tagsearchresult--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-explore-searchresults-timedsearchresult--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-explore-searchresults-timedsearchresult--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-no-results--no-public-content-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-no-results--no-public-content&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-no-results--no-matches-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-no-results--no-matches&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar--with-fields-selector-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar--with-fields-selector&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar--with-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar--with-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-fieldsselector--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-fieldsselector--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-fieldsselector--media-type-audio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-fieldsselector--media-type-audio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-fieldsselector--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-fieldsselector--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-filtermenu--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-filtermenu--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-filtermenu--media-type-audio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-filtermenu--media-type-audio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-filtermenu--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-filtermenu--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-keyword-search--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-keyword-search--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-keyword-search--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-keyword-search--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-keyword-search--with-placeholder-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-keyword-search--with-placeholder&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-keyword-search--with-additional-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-keyword-search--with-additional-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-search-suggestions--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-search-suggestions--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-bar-search-suggestions-suggestionslist--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-bar-search-suggestions-suggestionslist--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-results-container--all-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-results-container--all-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-results-container--no-public-content-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-results-container--no-public-content&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-search-search-results-container--no-matches-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-search-search-results-container--no-matches&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--filter-bar-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--filter-bar&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--managed-filter-bar-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--managed-filter-bar&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--empty-white-black-list-dependency-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--empty-white-black-list-dependency&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--single-param-value-dependency-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--single-param-value-dependency&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--creation-date-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--creation-date-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-bar--real-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-bar--real-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filter-wrapper--filter-wrapper-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filter-wrapper--filter-wrapper&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter--single-selection-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter--single-selection-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter--multi-selection-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter--multi-selection-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter--free-text-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter--free-text-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--checkbox-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--checkbox-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--disabled-checkbox-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--disabled-checkbox-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-all-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-all&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-all-no-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-no-all-no-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-with-custom-range-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-checkbox-filter--managed-checkbox-filter-with-custom-range&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-datefilter--simple-date-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-datefilter--simple-date-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--checkbox-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--checkbox-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--checkbox-checked-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--checkbox-checked-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--disabled-checkbox-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-checkbox-filter-item--disabled-checkbox-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-without-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-without-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-datefilteritem--date-filter-item-with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-datefilteritem--disabled-date-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-datefilteritem--disabled-date-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--simple-free-text-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--simple-free-text-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--free-text-filter-item-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--free-text-filter-item-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--disabled-free-text-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-freetextfilteritem--disabled-free-text-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio-closed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio-closed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio-with-dates-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-radio-with-dates&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-checkbox-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-group-filter-item--group-filter-item-checkbox&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-group-filter-item--disabled-group-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-group-filter-item--disabled-group-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-radio-filter-item--radio-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-radio-filter-item--radio-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-radio-filter-item--checked-radio-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-radio-filter-item--checked-radio-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-radio-filter-item--disabled-radio-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-radio-filter-item--disabled-radio-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-rangefilteritem--simple-range-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-rangefilteritem--simple-range-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-rangefilteritem--range-filter-item-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-rangefilteritem--range-filter-item-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-rangefilteritem--generic-range-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-rangefilteritem--generic-range-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-rangefilteritem--disabled-range-filter-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-rangefilteritem--disabled-range-filter-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-treefilteritem--item-checked-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-treefilteritem--item-checked&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-treefilteritem--item-un-checked-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-treefilteritem--item-un-checked&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-filter-items-treefilteritem--root-item-un-checked-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-filter-items-treefilteritem--root-item-un-checked&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-free-text-filter--free-text-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-free-text-filter--free-text-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-radio-filter--radio-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-radio-filter--radio-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-radio-filter--disabled-radio-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-radio-filter--disabled-radio-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-radio-filter--managed-radio-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-radio-filter--managed-radio-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-radio-filter--managed-radio-filter-no-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-radio-filter--managed-radio-filter-no-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-vertical-filter-bar-filters-treefilter--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-vertical-filter-bar-filters-treefilter--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplemenu--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplemenu--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplemenu--different-icon-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplemenu--different-icon&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplemenu--alternative-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplemenu--alternative-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplemenu--close-on-item-click-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplemenu--close-on-item-click&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplethumbnail--with-duration-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplethumbnail--with-duration&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplethumbnail--live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplethumbnail--live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplethumbnail--large-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplethumbnail--large&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-simplethumbnail--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-simplethumbnail--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-filters-section--filter-bar-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-filters-section--filter-bar&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-filters-section--slider-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-filters-section--slider&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-filters-section--single-filter-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-filters-section--single-filter&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--with-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--with-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--with-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--with-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--with-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--with-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--with-button-and-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--with-button-and-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-statusscreen--with-custom-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-statusscreen--with-custom-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-styledillustration--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-styledillustration--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-styledillustration--class-on-path-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-styledillustration--class-on-path&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-textslider--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-textslider--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--empty-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--empty&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--short-text-no-truncate-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--short-text-no-truncate&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--markup-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--markup-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-more-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-more&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-more-new-line-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-more-new-line&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-mark-up-more-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-mark-up-more&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-br-more-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-br-more&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--text-br-markup-more-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--text-br-markup-more&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('ui-truncate--with-render-errors-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=ui-truncate--with-render-errors&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-userselection--multiple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-userselection--multiple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('shared-media-actions-items-collaboration-userselection--single-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=shared-media-actions-items-collaboration-userselection--single&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('utils-fetch--fetch-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=utils-fetch--fetch-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-html-only--default-story-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-html-only--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-news--default-story-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-news--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-text-only--default-story-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-text-only--default-story&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-agenda--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-agenda--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-auth-broker-logout--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-auth-broker-logout--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-admin-auth-broker-profiles--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-admin-auth-broker-profiles--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-admin-auth-broker-profiles--empty-table-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-admin-auth-broker-profiles--empty-table&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-board-messages--edit-board-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-board-messages--edit-board&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-bulk-login-links--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-bulk-login-links--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates--multiple-cert-pages-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates--multiple-cert-pages&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates--no-certificates-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates--no-certificates&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-modal--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-modal--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-norecords--empty-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-norecords--empty&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-table--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-table--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-table-skeleton--table-skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-table-skeleton--table-skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-table-skeleton--skeleton-row-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-table-skeleton--skeleton-row&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-certificates-timestamp--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-certificates-timestamp--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--vertical-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--vertical-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--vertical-view-no-actions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--vertical-view-no-actions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--tabs-view-grid-no-actions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--tabs-view-grid-no-actions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--tabs-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--tabs-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--tabs-view-grid-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--tabs-view-grid&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--tabs-view-no-sessions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--tabs-view-no-sessions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--tabs-view-no-entries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--tabs-view-no-entries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--vertical-view-no-about-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--vertical-view-no-about&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--kaf-vertical-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--kaf-vertical-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--kaf-tabs-view-grid-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--kaf-tabs-view-grid&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--kaf-tabs-view-no-sessions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--kaf-tabs-view-no-sessions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--kaf-two-cta-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--kaf-two-cta-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--kaf-lean-channel-header-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--kaf-lean-channel-header&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page--with-thumbnail-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page--with-thumbnail&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-about--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-about--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-components-actionsdropdown--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-components-actionsdropdown--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-components-actionsdropdown-importchannelmenuitem--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-components-actionsdropdown-importchannelmenuitem--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-components-actionsdropdown-importchannel-message--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-components-actionsdropdown-importchannel-message--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-components-actionsdropdown-importchannel-message--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-components-actionsdropdown-importchannel-message--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-boardmessages--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-boardmessages--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--with-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--with-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--with-video-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--with-video&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--with-logo-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--with-logo&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--with-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--with-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--with-links-and-img-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--with-links-and-img&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--short-texts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--short-texts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-lean-header--kaf-primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-lean-header--kaf-primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-lean-header--kaf-no-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-lean-header--kaf-no-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-links--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-links--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-links--many-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-links--many-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-links--no-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-links--no-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--not-subscribed-no-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--not-subscribed-no-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--subscribed-no-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--subscribed-no-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--not-subscribed-one-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--not-subscribed-one-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--subscribed-one-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--subscribed-one-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--not-subscribed-many-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--not-subscribed-many-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe--subscribed-many-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe--subscribed-many-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe-notificationmessage--success-subscribe-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe-notificationmessage--success-subscribe&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe-notificationmessage--error-subscribe-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe-notificationmessage--error-subscribe&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe-notificationmessage--success-unsubscribe-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe-notificationmessage--success-unsubscribe&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-header-subscribe-notificationmessage--error-unsubscribe-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-header-subscribe-notificationmessage--error-unsubscribe&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-media-list--list-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-media-list--list-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-playlistcarousels--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-playlistcarousels--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-sessions--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-sessions--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-page-sections-sessions--with-thumbnail-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-page-sections-sessions--with-thumbnail&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections--list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections--list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections--grid-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections--grid&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-channel-item--grid-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-channel-item--grid&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-channel-item--grid-no-logo-no-badge-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-channel-item--grid-no-logo-no-badge&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-channel-item--truncated-name-with-badge-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-channel-item--truncated-name-with-badge&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-channel-item--truncated-name-no-badge-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-channel-item--truncated-name-no-badge&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-channel-item--list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-channel-item--list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channels-collections-sortdropdown--sort-dropdown-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channels-collections-sortdropdown--sort-dropdown&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-tv-sidebar--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-tv-sidebar--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-tv-sidebar--live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-tv-sidebar--live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-tv-sidebar--in-layout-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-tv-sidebar--in-layout&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-channel-tv-sidebar--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-channel-tv-sidebar--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('disclaimer--html-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=disclaimer--html-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale--with-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale--with-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale--no-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale--no-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-deletelocalemodal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-deletelocalemodal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-editlocalemodal--first-language-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-editlocalemodal--first-language&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-editlocalemodal--add-language-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-editlocalemodal--add-language&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-editlocalemodal--edit-language-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-editlocalemodal--edit-language&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-editlocalemodal--force-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-editlocalemodal--force-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-emptyscreen--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-emptyscreen--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-entryinfoscreen--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-entryinfoscreen--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('edit-custom-locale-localestable--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=edit-custom-locale-localestable--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-emaillogin-entersitescreen--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-emaillogin-entersitescreen--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-emaillogin-statusscreen--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-emaillogin-statusscreen--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-errorpage--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-errorpage--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-errorpage--with-exception-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-errorpage--with-exception&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-errorpage--empty-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-errorpage--empty-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-page--allow-search-by-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-page--allow-search-by-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-page--no-search-by-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-page--no-search-by-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-errors-error-banner--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-errors-error-banner--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-illustrated-notices--general-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-illustrated-notices--general-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-illustrated-notices--no-camera-permissions-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-illustrated-notices--no-camera-permissions-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-illustrated-notices--not-allowed-to-checkin-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-illustrated-notices--not-allowed-to-checkin-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-detect-user--allow-search-by-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-detect-user--allow-search-by-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-detect-user--no-search-by-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-detect-user--no-search-by-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-detect-user--no-generate-new-qr-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-detect-user--no-generate-new-qr&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-generate-qr--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-generate-qr--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-review-details--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-review-details--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-review-details--no-edit-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-review-details--no-edit&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-search-by-name--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-search-by-name--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-search-results--with-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-search-results--with-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-search-results--with-pagination-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-search-results--with-pagination&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-search-results--no-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-search-results--no-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-search-skeleton--searching-skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-search-skeleton--searching-skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-start--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-start--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-start--with-locale-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-start--with-locale&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-success--checkin-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-success--checkin&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-event-check-in-stages-success--send-qr-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-event-check-in-stages-success--send-qr&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search--search-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search--search-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search--all-content-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search--all-content&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search--empty-all-content-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search--empty-all-content&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--all-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--all-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--all-media-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--all-media&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--all-results-one-page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--all-results-one-page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--only-entries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--only-entries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--only-entries-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--only-entries-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--no-entries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--no-entries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--no-channels-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--no-channels&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--no-galleries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--no-galleries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults--wide-layout-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults--wide-layout&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults--narrow-layout-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults--narrow-layout&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults-channelitem--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults-channelitem--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults-channelslist--four-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults-channelslist--four&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults-channelslist--six-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults-channelslist--six&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-channelsearchresults-channelslist--not-enough-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-channelsearchresults-channelslist--not-enough-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-entrysearchresults--all-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-entrysearchresults--all-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-entrysearchresults--all-media-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-entrysearchresults--all-media&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results-gallerysearchresults--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results-gallerysearchresults--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-search-results--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-search-results--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-tagsuggestions--with-more-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-tagsuggestions--with-more-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-tagsuggestions--with-active-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-tagsuggestions--with-active-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-global-search-tagsuggestions--few-tags-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-global-search-tagsuggestions--few-tags&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-carousel--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-carousel--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-carousel--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-carousel--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page--long-texts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page--long-texts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page--no-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page--no-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-card--big-with-bio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-card--big-with-bio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-card--big-with-long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-card--big-with-long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-card--small-with-bio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-card--small-with-bio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-card--small-with-long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-card--small-with-long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-card--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-card--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-modal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-modal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-modal--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-modal--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-user-modal--no-sessions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-user-modal--no-sessions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-group-users-side-by-side--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-group-users-side-by-side--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-template-pages-component--carousel-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-template-pages-component--carousel&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-template-pages-component--carousel-time-shift-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-template-pages-component--carousel-time-shift&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-template-pages-component--side-by-side-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-template-pages-component--side-by-side&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-template-pages-component--side-by-side-time-shift-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-template-pages-component--side-by-side-time-shift&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-filtersection--one-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-filtersection--one-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-filtersection--multiple-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-filtersection--multiple-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-groupusers--with-search-indicator-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-groupusers--with-search-indicator&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-groupusers--without-search-indicator-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-groupusers--without-search-indicator&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-groupusers--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-groupusers--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-promotedusers--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-promotedusers--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-promotedusers--one-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-promotedusers--one-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-promotedusers--two-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-promotedusers--two-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-promotedusers--three-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-promotedusers--three-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-group-page-page-promotedusers--four-items-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-group-page-page-promotedusers--four-items&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-contactus--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-contactus--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-actionicon--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-actionicon--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-expansionpanel--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-expansionpanel--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-expansionpaneldetails--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-expansionpaneldetails--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-expansionpanelsummary--collapsed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-expansionpanelsummary--collapsed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-expansionpanelsummary--expanded-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-expansionpanelsummary--expanded&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page-faq-main--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page-faq-main--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-help-page--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-help-page--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page--all-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page--all&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-adimages--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-adimages--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--image-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--image-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--button-with-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--button-with-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--no-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--no-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-banner-cta--text-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-banner-cta--text-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-channels--six-in-row-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-channels--six-in-row&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-channels--less-than-six-in-row-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-channels--less-than-six-in-row&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-channels--eight-in-row-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-channels--eight-in-row&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-channels--eight-in-row-three-rows-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-channels--eight-in-row-three-rows&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-channels--disable-entitlements-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-channels--disable-entitlements&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--live-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--live-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--many-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--many-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--vod-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--vod-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--titled-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--titled-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--carousel-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--carousel&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--carousel-paused-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--carousel-paused&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--carousel-with-different-entries-count-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--carousel-with-different-entries-count&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit--static-images-carousel-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit--static-images-carousel&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit-text-and-counter--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit-text-and-counter--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit-text-and-counter--long-texts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit-text-and-counter--long-texts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-hero-unit-text-and-counter--with-header-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-hero-unit-text-and-counter--with-header&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-news-modal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-news-modal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--with-registration-form-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--with-registration-form&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--in-schedule-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--in-schedule-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--outof-schedule-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--outof-schedule-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--only-start-time-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--only-start-time&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-registration--start-open-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-registration--start-open&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--styled-text-box-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--styled-text-box&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--video-left-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--video-left&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--video-left-and-long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--video-left-and-long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--no-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--no-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--no-text-video-left-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--no-text-video-left&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-singlevideo--long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-singlevideo--long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-home-page-components-upcoming-sessions--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-home-page-components-upcoming-sessions--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me--inspire-me-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me--inspire-me&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-channel-card--thumbnail-background-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-channel-card--thumbnail-background&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-channel-card--video-background-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-channel-card--video-background&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-channel-card--no-thumbnail-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-channel-card--no-thumbnail&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me--card-gradients-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me--card-gradients&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-haiku-card--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-haiku-card--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-skeleton--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-skeleton--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-like-button--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-like-button--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-session-card--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-session-card--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-session-card--no-thumbnail-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-session-card--no-thumbnail&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-session-card--no-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-session-card--no-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-session-card--no-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-session-card--no-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-simple-text-card--fact-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-simple-text-card--fact&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-tags--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-tags--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-web-page-card--podcast-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-web-page-card--podcast&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-inspire-me-web-page-card--blogpost-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-inspire-me-web-page-card--blogpost&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-invite-modal--single-user-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-invite-modal--single-user-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-invite-modal--bulk-user-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-invite-modal--bulk-user-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-singleinvitemodalcontent--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-singleinvitemodalcontent--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-singleinvitemodalcontent--user-already-exists-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-singleinvitemodalcontent--user-already-exists&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-singleinvitemodalcontent--sso-domains-user-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-singleinvitemodalcontent--sso-domains-user&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-singleinvitemodalcontent--user-invited-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-singleinvitemodalcontent--user-invited&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-singleinvitemodalcontent--unexpected-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-singleinvitemodalcontent--unexpected-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-single-invite-form--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-single-invite-form--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection--invite-amount-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection--invite-amount&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection--invite-type-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection--invite-type&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection-selection-item--single-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection-selection-item--single-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection-selection-item--bulk-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection-selection-item--bulk-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection-selection-item--set-password-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection-selection-item--set-password-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-invite-users-type-selection-selection-item--register-invite-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-invite-users-type-selection-selection-item--register-invite&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-kcapture--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-kcapture--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-kcapture--no-download-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-kcapture--no-download-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-layout-hero--solid-header-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-layout-hero--solid-header&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-layout-hero--transparent-header-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-layout-hero--transparent-header&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-layout-hero--no-header-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-layout-hero--no-header&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-layout-hero--full-size-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-layout-hero--full-size&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-layout-hero--aspect-ratio-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-layout-hero--aspect-ratio&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard--empty-table-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard--empty-table&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-filters--page-with-tabs-and-filters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-filters--page-with-tabs-and-filters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-filters--page-with-tabs-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-filters--page-with-tabs-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-filters--page-with-filters-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-filters--page-with-filters-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-get-more-points-modal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-get-more-points-modal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-get-more-points-rule--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-get-more-points-rule--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-get-more-points-rule--long-score-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-get-more-points-rule--long-score-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-get-more-points-rule--long-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-get-more-points-rule--long-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-user-card--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-user-card--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-user-card--initials-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-user-card--initials&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-leaderboard-usertablerow--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-leaderboard-usertablerow--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-list-page-item--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-list-page-item--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-list-page-item--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-list-page-item--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-list-page-page--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-list-page-page--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-forgotpassword-advanced-k-auth--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-forgotpassword-advanced-k-auth--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-forgotpassword-advanced-k-auth--with-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-forgotpassword-advanced-k-auth--with-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-forgotpassword-advanced-k-auth--with-hidden-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-forgotpassword-advanced-k-auth--with-hidden-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginselection-loginoption--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginselection-loginoption--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginselection-loginoption--no-tooltip-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginselection-loginoption--no-tooltip&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginselection--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginselection--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-loginselection--no-tooltips-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-loginselection--no-tooltips&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form-forgot-password--link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form-forgot-password--link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form-forgot-password--mailto-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form-forgot-password--mailto&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login--no-login-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login--no-login-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login--with-cta-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login--with-cta&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--with-otp-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--with-otp&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--with-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--with-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--with-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--with-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--no-password-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--no-password&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-login-form--with-hidden-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-login-form--with-hidden-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-passwordexpired-advanced-k-auth--successful-submission-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-passwordexpired-advanced-k-auth--successful-submission&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-passwordexpired-advanced-k-auth--failed-submission-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-passwordexpired-advanced-k-auth--failed-submission&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-reset-password--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-reset-password--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-reset-password--invalid-link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-reset-password--invalid-link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-reset-password-reset-password-error--dark-theme-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-reset-password-reset-password-error--dark-theme&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password--bad-response-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password--bad-response&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-complete--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-complete--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-complete--with-texts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-complete--with-texts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-complete--with-qr-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-complete--with-qr&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-error--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-error--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-error--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-error--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-form--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-form--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-form--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-form--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('login-set-password-set-password-form--reset-password-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=login-set-password-set-password-form--reset-password&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--kwebcast-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--kwebcast&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--lobby-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--lobby-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--meeting-room-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--meeting-room&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--scheduled-media-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--scheduled-media&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--tv-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--tv-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--virtual-event-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--virtual-event&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--vod-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--vod&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--converting-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--converting&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--player-not-supported-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--player-not-supported&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--draft-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--draft-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--document-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--document-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--playlist-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--playlist&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--fetch-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--fetch-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-ai-quiz-generate--error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-ai-quiz-generate--error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-ai-quiz-generate--preview-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-ai-quiz-generate--preview&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-ai-quiz-generate--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-ai-quiz-generate--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--converting-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--converting&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--converting-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--converting-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--converting-error-on-done-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--converting-error-on-done&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--in-progress-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--in-progress&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--conversion-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--conversion-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--conversion-error-editor-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--conversion-error-editor&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--converting-done-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--converting-done&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--converting-done-with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--converting-done-with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting--converting-done-with-error-editor-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting--converting-done-with-error-editor&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting-conversion-error--convertion-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting-conversion-error--convertion-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting-conversion-error--convertion-error-owner-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting-conversion-error--convertion-error-owner&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting-conversion-in-progress--in-progress-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting-conversion-in-progress--in-progress&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-converting-conversion-in-progress--in-progress-owner-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-converting-conversion-in-progress--in-progress-owner&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--pdf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--pdf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--docx-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--docx&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--pptx-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--pptx&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--xlsx-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--xlsx&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--csv-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--csv&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-documentviewerhero--txt-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-documentviewerhero--txt&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--draft-entry-hero-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--draft-entry-hero&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--present-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--present&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--present-live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--present-live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--past-recorded-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--past-recorded&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-kwebcasthero--past-remove-player-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-kwebcasthero--past-remove-player&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--future-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--future-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--future-schedule-different-days-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--future-schedule-different-days&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--session-ended-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--session-ended&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--start-soon-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--start-soon&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--no-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--no-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-lobby-only-hero--with-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-lobby-only-hero--with-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--scheduling-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--scheduling&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--no-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--no-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--actions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--actions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--two-lines-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--two-lines-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--three-lines-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--three-lines-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--static-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--static-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--fetched-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--fetched-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--video-background-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--video-background&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--not-supported-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--not-supported&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby--kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby--kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-counter--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-counter--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-schedule--same-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-schedule--same-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-schedule--different-day-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-schedule--different-day&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-title--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-title--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-title--with-ellipsis-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-title--with-ellipsis&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-data--fetched-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-data--fetched&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-data--fetched-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-data--fetched-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-data--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-data--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-lobby-data--static-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-lobby-data--static-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-meetingroomhero--future-meeting-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-meetingroomhero--future-meeting&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-meetingroomhero--future-meeting-admin-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-meetingroomhero--future-meeting-admin&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-meetingroomhero--live-meeting-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-meetingroomhero--live-meeting&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-meetingroomhero--with-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-meetingroomhero--with-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--player-not-supported-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--player-not-supported&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--player-not-supported-no-entry-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--player-not-supported-no-entry&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-playlist--playlist-player-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-playlist--playlist-player&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-playlist--no-data-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-playlist--no-data&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-playlist--no-data-owner-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-playlist--no-data-owner&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-scheduledmediahero--future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-scheduledmediahero--future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-scheduledmediahero--present-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-scheduledmediahero--present&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-scheduledmediahero--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-scheduledmediahero--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-scheduledmediahero--no-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-scheduledmediahero--no-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-tv-hero--future-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-tv-hero--future&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-tv-hero--present-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-tv-hero--present&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-tv-hero--past-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-tv-hero--past&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-tv-hero--with-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-tv-hero--with-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-virtualevent--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-virtualevent--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero-virtualevent--with-presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero-virtualevent--with-presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-hero--vod-hero-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-hero--vod-hero&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-all--with-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-all--with-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-all--fetch-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-all--fetch-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-category--channel-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-category--channel&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-category--category-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-category--category&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-content-policy--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-content-policy--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-content-policy--long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-content-policy--long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-custom-metadata--text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-custom-metadata--text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-custom-metadata--link-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-custom-metadata--link&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-custom-metadata--paragraphs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-custom-metadata--paragraphs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-custom-metadata--html-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-custom-metadata--html&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-custom-metadata--multiple-lines-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-custom-metadata--multiple-lines&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-metadata--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-metadata--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-description--short-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-description--short-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-description--long-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-description--long-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-description--long-description-with-paragraphs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-description--long-description-with-paragraphs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-media-description--large-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-media-description--large-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-presenters--presenters-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-presenters--presenters&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-skeleton--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-skeleton--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-publishing-schedule--alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-publishing-schedule--alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-metadata-publishing-schedule--alert-no-end-date-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-metadata-publishing-schedule--alert-no-end-date&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data--all-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data--all&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data--fetch-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data--fetch-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-item--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-item--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-item--no-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-item--no-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-item--no-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-item--no-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-item--long-file-name-with-spaces-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-item--long-file-name-with-spaces&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-item--long-file-name-with-no-spaces-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-item--long-file-name-with-no-spaces&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data-attachments-list--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data-attachments-list--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-module-data--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-module-data--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-presenter--light-background-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-presenter--light-background&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-presenter--light-background-initials-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-presenter--light-background-initials&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-presenter--dark-background-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-presenter--dark-background&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-presenter--dark-background-initials-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-presenter--dark-background-initials&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-right-panel-layout--expanded-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-right-panel-layout--expanded&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-right-panel-layout--collapsed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-right-panel-layout--collapsed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-right-panel-layout--no-right-panel-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-right-panel-layout--no-right-panel&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page--entry-out-of-schedule-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page--entry-out-of-schedule&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share--lobby-share-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share--lobby-share&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share--kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share--kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal--embed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal--embed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal--oembed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal--oembed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal--no-embeds-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal--no-embeds&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal--no-timing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal--no-timing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal-settings--embed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal-settings--embed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal-settings--oembed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal-settings--oembed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal-settings--oembed-no-config-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal-settings--oembed-no-config&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-share-sharemodal-settings--no-players-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-share-sharemodal-settings--no-players&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar--all-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar--all&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar--fetch-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar--fetch-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media--empty-list-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media--empty-list&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--only-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--only-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--long-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--long-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--scheduled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--scheduled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--live-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--live&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--live-soon-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--live-soon&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar-related-media-mediaitem--duration-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar-related-media-mediaitem--duration&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-sidebar--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-sidebar--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-cta--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-cta--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--scheduling-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--scheduling&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--hero-alerts-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--hero-alerts&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--created-by-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--created-by&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--hidden-views-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--hidden-views&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--no-views-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--no-views&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--title-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--title-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--no-actions-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--no-actions&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--no-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--no-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--no-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--no-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--fetch-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--fetch-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions--buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions--buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions--buttons-with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions--buttons-with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions--menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions--menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions--menu-with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions--menu-with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions--buttons-and-menu-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions--buttons-and-menu&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-buttons-ai-quiz--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-buttons-ai-quiz--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-buttons-ai-quiz--no-captions-default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-buttons-ai-quiz--no-captions-default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-actions-buttons-single-download--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-actions-buttons-single-download--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--player-not-suported-alert-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--player-not-suported-alert&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--created-by-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--created-by&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--long-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--long-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--no-views-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--no-views&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--scheduled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--scheduled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--only-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--only-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--markup-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--markup-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-media-page-title-area-title--single-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-media-page-title-area-title--single-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media--kaf-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media--kaf&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkaddtoplaylist--as-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkaddtoplaylist--as-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkaddtoplaylist--as-menu-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkaddtoplaylist--as-menu-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkaddtoplaylist--single-entry-selected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkaddtoplaylist--single-entry-selected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkaddtoplaylist-skeleton--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkaddtoplaylist-skeleton--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--as-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--as-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--as-menu-item-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--as-menu-item&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--delete-single-not-allowed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--delete-single-not-allowed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--some-not-allowed-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--some-not-allowed&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--delete-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--delete-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-bulk-actions-bulkdelete--confirmation-text-component-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-bulk-actions-bulkdelete--confirmation-text-component&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card--vod-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card--vod&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card--scheduled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card--scheduled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card--active-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card--active&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-actions--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-actions--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-media-info--private-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-media-info--private&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-media-info--private-views-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-media-info--private-views&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-media-info--private-no-indicator-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-media-info--private-no-indicator&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-media-info--unlisted-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-media-info--unlisted&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-media-card-media-info--published-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-media-card-media-info--published&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-entrysearchresults--all-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-entrysearchresults--all-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-resultscount--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-resultscount--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-resultscount--some-selected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-resultscount--some-selected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-resultscount--search-in-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-resultscount--search-in-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-resultscount--search-in-label-with-selection-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-resultscount--search-in-label-with-selection&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-search-results--all-results-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-search-results--all-results&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-search-results--with-pager-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-search-results--with-pager&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-search-results--search-in-label-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-search-results--search-in-label&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-search-results--no-entries-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-search-results--no-entries&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results-search-results-data-search-results-actionsbar--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results-search-results-data-search-results-actionsbar--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-my-media-search-results--skeleton-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-my-media-search-results--skeleton&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-personalprofile--speaker-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-personalprofile--speaker&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-personalprofile--attendee-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-personalprofile--attendee&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-personalprofile--no-tabs-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-personalprofile--no-tabs&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-personalprofile--with-tabs-and-deeplink-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-personalprofile--with-tabs-and-deeplink&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs--calendar-view-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs--calendar-view&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-contact-info--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-contact-info--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-contact-info--empty-fields-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-contact-info--empty-fields&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-scheduledwatchlisttab--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-scheduledwatchlisttab--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-sessionstab--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-sessionstab--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-actionsdropdown--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-actionsdropdown--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-actionsdropdown--with-group-change-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-actionsdropdown--with-group-change&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-groupchangemenu--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-groupchangemenu--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--long-name-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--long-name&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--no-registration-links-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--no-registration-links&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--no-edit-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--no-edit-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--no-buttons-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--no-buttons&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--no-title-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--no-title&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userdetails--with-badges-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userdetails--with-badges&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userpagehead--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userpagehead--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userpagehead--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userpagehead--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-edit-userprofileedit--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-edit-userprofileedit--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-edit-userprofileedit--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-edit-userprofileedit--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-edit-userthumbnailuploader--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-edit-userthumbnailuploader--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-edit-userthumbnailuploader--empty-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-edit-userthumbnailuploader--empty&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--broken-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--broken-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--with-intro-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--with-intro&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--with-edit-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--with-edit&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--broken-image-with-edit-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--broken-image-with-edit&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--no-image-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--no-image&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--no-image-with-edit-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--no-image-with-edit&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--processing-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--processing&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-userthumbnail--undefined-thumbnail-url-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-userthumbnail--undefined-thumbnail-url&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-watchlisttab-emptywatchlist--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-watchlisttab-emptywatchlist--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-watchlisttab-removedentries--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-watchlisttab-removedentries--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-watchlisttab--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-watchlisttab--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('personal-profile-tabs-watchlisttab--empty-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=personal-profile-tabs-watchlisttab--empty&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerupgradetool--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerupgradetool--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-errormessage--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-errormessage--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-manualreplacement--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-manualreplacement--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-manualreplacement-manualreplacementlink--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-manualreplacement-manualreplacementlink--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playersbackup--no-backup-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playersbackup--no-backup&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playersbackup--with-backup-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playersbackup--with-backup&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerslist--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerslist--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerslist--some-selected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerslist--some-selected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerslist-playeritem--unselected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerslist-playeritem--unselected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerslist-playeritem--selected-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerslist-playeritem--selected&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-playerslist-playeritem--disabled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-playerslist-playeritem--disabled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-preview--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-preview--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-replacementmodal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-replacementmodal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-successmessage--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-successmessage--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('player-upgrade-uiconfselector--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=player-upgrade-uiconfselector--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-playlistgrid--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-playlistgrid--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-playlistgrid--long-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-playlistgrid--long-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-playlistgrid--no-description-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-playlistgrid--no-description&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-studio-banner--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-studio-banner--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-privacybanner--main-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-privacybanner--main&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-recorder--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-recorder--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationeditor--form-editor-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationeditor--form-editor&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationeditor--predefined-form-editor-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationeditor--predefined-form-editor&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationeditor--form-section-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationeditor--form-section&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationeditor--pre-defined-form-section-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationeditor--pre-defined-form-section&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-embed-form--regular-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-embed-form--regular&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-embed-form--no-options-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-embed-form--no-options&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-confirmationerror--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-confirmationerror--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-confirmation--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-confirmation--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-confirmation--with-qr-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-confirmation--with-qr&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-confirmation--with-inner-tag-element-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-confirmation--with-inner-tag-element&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationcomplete--new-registration-complete-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationcomplete--new-registration-complete&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationcomplete--new-registration-complete-button-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationcomplete--new-registration-complete-button&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationcomplete--edit-registration-complete-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationcomplete--edit-registration-complete&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationerrors--new-registration-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationerrors--new-registration-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationerrors--edit-registration-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationerrors--edit-registration-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationerrors--invite-registration-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationerrors--invite-registration-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationerrors--general-registration-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationerrors--general-registration-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationform--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationform--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-registrationform--section-with-hidden-fields-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-registrationform--section-with-hidden-fields&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-siteregistration--registration-screen-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-siteregistration--registration-screen&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-siteregistration--registration-screen-hidden-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-siteregistration--registration-screen-hidden-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-siteregistration--field-length-exceeded-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-siteregistration--field-length-exceeded&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-siteregistration--registration-screen-no-mandatory-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-siteregistration--registration-screen-no-mandatory&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--read-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--read-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-checkboxfield--long-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-checkboxfield--long-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-passwordfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-passwordfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-passwordfield--read-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-passwordfield--read-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-passwordfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-passwordfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-passwordfield--with-general-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-passwordfield--with-general-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-passwordfield--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-passwordfield--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--read-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--read-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-radiobuttonfield--many-options-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-radiobuttonfield--many-options&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-registrationtypefield--registration-type-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-registrationtypefield--registration-type&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-creatable-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-creatable&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-with-placeholder-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-with-placeholder&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-creatable-with-custom-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-creatable-with-custom-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-disabled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-disabled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--auto-complete-required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--auto-complete-required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-with-placeholder-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-with-placeholder&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-with-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-with-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-disabled-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-disabled&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-selectfield--select-required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-selectfield--select-required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--with-placeholder-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--with-placeholder&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--read-only-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--read-only&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-textfield--loading-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-textfield--loading&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--with-instruction-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--with-instruction&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--with-default-value-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--with-default-value&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--with-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--with-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--required-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--required&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-fieldtypes-tagselectionfield--few-options-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-fieldtypes-tagselectionfield--few-options&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-unregsiter--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-unregsiter--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-verification--simple-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-verification--simple&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-verification--no-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-verification--no-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-verification--hidden-captcha-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-verification--hidden-captcha&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('siteregistration-verification--external-error-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=siteregistration-verification--external-error&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-restream-destinations--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-restream-destinations--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-restream-destinations-modal--modal-add-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-restream-destinations-modal--modal-add&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-restream-destinations-modal--modal-delete-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-restream-destinations-modal--modal-delete&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-restream-destinations-table--table-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-restream-destinations-table--table&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-studio--theme-editor-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-studio--theme-editor&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media--page-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media--page&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-draganddrop--full-size-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-draganddrop--full-size&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-draganddrop--small-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-draganddrop--small&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-upload-media-bulkeditmodal--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-upload-media-bulkeditmodal--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-header-badgesmenu-badgetoearn--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-header-badgesmenu-badgetoearn--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-header-badgesmenu-carousel--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-header-badgesmenu-carousel--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-header-badgesmenu--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-header-badgesmenu--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-badgesmodal--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-badgesmodal--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-badgesmodal--rich-text-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-badgesmodal--rich-text&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-personalprofile-badgestab--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-personalprofile-badgestab--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-personalprofile-badgestab-badgetoearn--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-personalprofile-badgestab-badgetoearn--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-personalprofile-badgestab-earnedbadge--not-truncated-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-personalprofile-badgestab-earnedbadge--not-truncated&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-personalprofile-badgestab-earnedbadge--truncated-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-personalprofile-badgestab-earnedbadge--truncated&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-userbadges-personalprofile-userdetails--default-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-userbadges-personalprofile-userdetails--default&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});


it('features-waiting-room--primary-a11y-test', () => {
  cy.visit("http://localhost:4400/iframe.html?args=&id=features-waiting-room--primary&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});

});
