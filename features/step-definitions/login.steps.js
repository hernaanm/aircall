const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/loginPage');
const LanguagePage = require('../pageobjects/languagePage');

const pages = {
    login: LoginPage,
}

Given('I am on the {string} page', (page) => {
    pages[page].open();
});
//-------------------------------- WHEN
When('I login with user {string} and password {string}', (user,password) => {
    LoginPage.login(user, password);
});


//---------------------------------THEN
Then('I see text {string}', (text) => {
    const element = $(`//*[text()='${text}']`)
    element.waitForDisplayed();
});

