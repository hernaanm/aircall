const { Given, When, Then } = require('@cucumber/cucumber');

const PhonePage = require('../pageobjects/phonePage');

//-------------------------------- WHEN
When('I navigate contact menu', () => {
    PhonePage.navigateToContacts()
});


When('I call contact {string}', (contact) => {
    PhonePage.callContact(contact)
});

When('I call number {string}', (number) => {
    PhonePage.callNumber(number)
});

//-------------------------------- THEN

Then('I am on phone page', () => {
    PhonePage.keypad.waitForDisplayed();
});

Then('I see my contacts', () => {
    PhonePage.contact.waitForDisplayed();
});
