const { Given, When, Then } = require('@cucumber/cucumber');

const InCallPage = require('../pageobjects/inCallPage');



When('I mute call', () => {
    InCallPage.muteCall()
});


When('I hold call', () => {
    InCallPage.holdCall()
});

When('I tap on keyboard on a call', () => {
    InCallPage.tapKeypad()
});

When('I close keyboard on a call', () => {
    InCallPage.closeKeypad()
});

When('I enter in keyboard {string}', (string) => {
    string.split('').forEach(key=> {
        var element = $(`//*[text()='${key}']`);
        element.waitForClickable({ timeout: 3000 });
        element.click();
    })
});


When('I tap on assign button on a call', () => {
    InCallPage.tapAssignMenu()
});


When('I assign agent {string}', (agent) => {
    InCallPage.assignAgent(agent)
});


When('I tap on tag button on a call', () => {
    InCallPage.openTagMenu()
});

When('I assign first tag', () => {
    InCallPage.selectFirstTag()
    InCallPage.btnTagsDone.waitForClickable({ timeout: 3000 });
    InCallPage.btnTagsDone.click()
});


When('I tap on notes button on a call', () => {
    InCallPage.openNotesMenu()
});

When('I write {string} notes in a call', (text) => {
    InCallPage.writeNotes(text)
    InCallPage.btnTagsDone.waitForClickable({ timeout: 3000 });
    InCallPage.btnTagsDone.click()
});

When('I hang up a call', () => {
    InCallPage.hangUp();
});

//---


Then('mute button toggle', () => {
    InCallPage.btnUnmute.waitForDisplayed();
});


Then('hold button toggle', () => {
    InCallPage.btnUnhold.waitForDisplayed();
});

Then('keyboard on call appear', () => {
    InCallPage.keypad.waitForDisplayed();
});

Then('I am on phone view', () => {
    InCallPage.inCallActions.waitForDisplayed();
    InCallPage.inCallFlowActions.waitForDisplayed();
});

Then('keyboard input has {string} value', (text) => {
    expect(InCallPage.inputKeyboard).toHaveValue(text)
});

Then('assign modal is displayed', () => {
    InCallPage.inputAssign.waitForDisplayed();
     $(`//*[text()='Assign to']`).waitForDisplayed();
});

Then('success assign modal is displayed', () => {
     $(`//*[text()='Call assigned']`).waitForDisplayed();
});

Then('tags modal is displayed', () => {
    InCallPage.testTag.waitForDisplayed();
});

Then ('tag tick button is displayed', ()=> {
    InCallPage.tagAssignedTick.waitForDisplayed()
});

Then ('notes {string} still saved', (text)=> {
    InCallPage.openNotesMenu()
    expect(InCallPage.inputModalNotes).toHaveText(text)
});