const { Then } = require('@wdio/cucumber-framework');
const compareText = require('./utils/compare-text');
const path = require('path');
const { DOWNLOAD_FOLDER_PATH } = require('./../constants/pathconst')
const fs = require("fs");
const { deleteDirectory } = require('./utils/fileutils');

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
  await expect(browser).toHaveUrl('https://careers.epam.ua/');
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
  
Then('Regions should be displayed correcly', async () => {
  await ($('#id-890298b8-f4a7-3f75-8a76-be36dc4490fd .js-tabs-controls')).isDisplayed();
});

Then('{string} region should be selected', async function (region) {
  await expect($(`//a[text()= '${region}']`)).toHaveAttribute('class', 'tabs-23__link js-tabs-link active')
});
  
Then('{string} region should not be selected', async function (region) {
  await expect($(`//a[text()= '${region}']`)).toHaveAttribute('class', 'tabs-23__link js-tabs-link')
});

Then('Search modal should be expanded', async () => {
  await expect($(".header-search__panel")).toHaveAttribute('class', 'header-search__panel opened')
});

Then('Search result list with searchterm {string} should be loaded', async function (searchterm) {
  await expect(browser).toHaveUrl(`https://www.epam.com/search?q=${searchterm}`);
});

Then('{string} should be required', async function (element) {
  var elem;
  switch(element){
    case 'FirstName textbox': 
      elem = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name'
      break;
      case 'LastName textbox': 
      elem = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name'
      break;
      case 'Email textbox': 
      elem = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email'
      break;
      case 'Phone textbox': 
      elem = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone'
      break;
  }

  await expect($(`${elem}`)).toHaveAttribute('aria-required', 'true')

});

Then('EPAM main page should be loaded', async () => {
  await expect(browser).toHaveUrl('https://www.epam.com/');
});

Then('file extension should be correct', async () => {
  const names = ['EPAM_Corporate_Overview_Q3_october']
  const extensions = ['.pdf']
  const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH)
  
  files.forEach( file => {
    expect(extensions).toContain(path.extname(file))
  })
  
  deleteDirectory(DOWNLOAD_FOLDER_PATH);
  
});



 