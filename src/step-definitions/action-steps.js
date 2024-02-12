const { Given } = require('@wdio/cucumber-framework');
const { When } = require('@wdio/cucumber-framework');


Given('I open the main page', async () => {
    await browser.url('https://epam.com')
    await browser.setWindowSize(1440, 500)
  });

When('I click on the theme toogle', async () => {
  await ($('.desktop-logo + .theme-switcher-ui .theme-switcher')).click();
});