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

Then('Location panel should be visible', async () => {
  await ($('location-selector__item')).isDisplayed();
});
  
Then('UA option in Location panel should be visible', async () => {
  await ($(`//li[@class="location-selector__item"]/a[@lang='uk']`)).isDisplayed();
});
  
Then('UA EPAM page should be loaded', async () => {
  await expect(browser).toHaveUrl('https://careers.epam.ua/')
});

Then('Policies list should include the correct items', async () => {
  await expect($('.policies-left')).toHaveChildren(3);
  await expect($('.policies-left .links-item:nth-of-type(1) .fat-links')).toHaveText('INVESTORS');
  await expect($('.policies-left .links-item:nth-of-type(2) .fat-links')).toHaveText('OPEN SOURCE');
  await expect($('.policies-left .links-item:nth-of-type(3) .fat-links')).toHaveText('PRIVACY POLICY');
  await expect($('.policies-right')).toHaveChildren(3);
  await expect($('.policies-right .links-item:nth-of-type(1) .fat-links')).toHaveText('COOKIE POLICY');
  await expect($('.policies-right .links-item:nth-of-type(2) .fat-links')).toHaveText('APPLICANT PRIVACY NOTICE');
  await expect($('.policies-right .links-item:nth-of-type(3) .fat-links')).toHaveText('WEB ACCESSIBILITY');
});
  
  

