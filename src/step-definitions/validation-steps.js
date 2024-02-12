const { Then } = require('@wdio/cucumber-framework');
const compareText = require('./utils/compare-text');


Then('Page title should {string} {string}', async function (shouldBeParam, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeParam);
});

Then('Page theme should be light', async () => {
  await ($('.fonts-loaded.light-mode')).isDisplayed();
});

Then('Page theme should be dark', async () => {
  await ($('.fonts-loaded.dark-mode')).isDisplayed();
});
  