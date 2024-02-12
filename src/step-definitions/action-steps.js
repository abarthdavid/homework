const { Given } = require('@wdio/cucumber-framework');
const { When } = require('@wdio/cucumber-framework');


Given('I open the main page', async () => {
    await browser.url('https://epam.com')
    await browser.setWindowSize(1440, 1080)
  });

When('I click on the theme toogle', async () => {
  await ($('.desktop-logo + .theme-switcher-ui .theme-switcher')).click();
});

When('I click on the location selector', async () => {
  await ($('.location-selector__button')).click();
});

When('I click on the UA option in Location panel', async () => {
  await ($(`//li[@class="location-selector__item"]/a[@lang='uk']`)).click();
});

When('I scroll to the bottom of the page', async () => {
  await ($('.footer-inner')).scrollIntoView();
});

