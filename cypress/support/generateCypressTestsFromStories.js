const fs = require('fs');
const path = require('path');
const chromaticStaticStorybook = "https://master--62a9fc062d2f2593a024a3a6.chromatic.com"

function generateCypressTestsFromStories(storiesJsonPath) {
    const stories = JSON.parse(fs.readFileSync(storiesJsonPath, 'utf8'));
    console.log(`got stories path ${storiesJsonPath} and parsed it ${stories ? "correctly" : "incorrectly"}`);
    const storyIds = Object.keys(stories.stories);
    const numberOfThreads = 64;
    const testsPerFile = Math.ceil(storyIds.length / numberOfThreads);
    console.log(`got ${storyIds.length} stories, number of threads needed is ${numberOfThreads}, tests per file - ${testsPerFile}`);
    let fileCounter = 1;
    const targetPath = './cypress/e2e/a11y';
    fs.mkdirSync(targetPath, { recursive: true })
    for (let i = 0; i < storyIds.length; i += testsPerFile) {
        const testFileContent = storyIds.slice(i, i + testsPerFile).map(storyId => {
            return `
it('${storyId}-a11y-test', () => {
  cy.visit("${chromaticStaticStorybook}/iframe.html?args=&id=${storyId}&viewMode=story");
  cy.injectAxe();
  cy.checkAccessibility();
});
`;
        }).join('\n');

        const testSuite = `
describe('Storybook Accessibility Tests', () => {
  ${testFileContent}
});
`;
        console.log(`finished generating content for file number ${fileCounter}`);
        const fileName = `storybookTests${fileCounter}.cy.js`;
        const filePath = path.join(targetPath, fileName);
        console.log(`going to write to file name ${filePath}`);
        fs.writeFileSync(filePath, testSuite);
        fileCounter++;
    }
}

const storiesJsonPath = process.argv[2];
generateCypressTestsFromStories(storiesJsonPath);
