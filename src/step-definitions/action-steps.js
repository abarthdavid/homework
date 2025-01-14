const { Given } = require('@wdio/cucumber-framework');
const { When } = require('@wdio/cucumber-framework');


Given('I open the main page', async () => {
    await browser.url('https://epam.com')
    await browser.maximizeWindow()
  });

Given('I open the contact page', async () => {
    await browser.url('https://www.epam.com/about/who-we-are/contact')
    await browser.maximizeWindow()
  });

  Given('I open the about page', async () => {
    await browser.url('https://www.epam.com/about')
    await browser.maximizeWindow()
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

When('I scroll to Our Locations part on the page', async () => {
  await ($('#id-890298b8-f4a7-3f75-8a76-be36dc4490fd')).scrollIntoView({ block: 'center' });
});

When('I click on the {string} region', async function (region) {
  await ($(`//a[text()= '${region}']`)).click();
});

When('I wait {int} seconds', async function (miliseconds) {
  var seconds = miliseconds / 1000;
  await browser.pause(seconds)
});
  
When('I click on the search button', async () => {
  await ($('.header-search__button')).click();
});

When('I set the {string} search term in the text box', async function (searchterm) {
  await ($('#new_form_search')).setValue(`${searchterm}`);
});

When('I click on the Find button', async () => {
  await ($('.custom-search-button')).click();
});

When('I click on the Submit button', async () => {
  await ($('.button-ui[type=submit]')).click();
});

When('I scroll to Submit button on the page', async () => {
  await ($('.button-ui[type=submit]')).scrollIntoView({ block: 'center' });
});

When('I click on the Logo in the Header', async () => {
  await ($('.desktop-logo')).click();
});

When('I scroll to Download button on the page', async () => {
  await ($('a[href*="https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf"]')).scrollIntoView({ block: 'center' });
});

When('I click on the Download button', async () => {

  await ($('a[href*="https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf"]')).click();
  await browser.pause(5000);
});