const { Given, When, Then } = require('@cucumber/cucumber');

const LanguagePage = require('../pageobjects/languagePage');


//-------------------------------- WHEN

When('I click on next button on language page', () => {
    LanguagePage.btnNext.click();
});



//-------------------------------- THEN

Then('I am on language page', () => {
    const title = $(`//*[text()='Language']`)
    const detail = $(`//*[text()='The app will use your current language']`)
    title.waitForDisplayed();
    detail.waitForDisplayed();
});

Then('default language is {string}', (language) => {
    expect(LanguagePage.defaultLanguage).toHaveText(language)
});
