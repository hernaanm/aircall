const { Given, When, Then } = require('@cucumber/cucumber');

const IntroductionPage = require('../pageobjects/introductionPage');


//-------------------------------- WHEN

When('I skip introduction page', () => {
    for (var i = 0; i < 4; i++) {
        IntroductionPage.btnNext.click();
     }
});



//-------------------------------- THEN

Then('I am on introduction page', () => {
    const title = $(`//*[text()='Your new Aircall experience']`)
    title.waitForDisplayed();
});
