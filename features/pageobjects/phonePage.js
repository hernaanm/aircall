const Page = require('./page');

class PhonePage extends Page {
    get keypad() { return $('[class="styles_keyboard__jZ_kO styles_mediumKeyboardSize__3q9iJ"]') }
    get peopleTabBar() { return $('[href="/people"]') }
    get contactsMenu() { return $('[data-test="people-contacts"]')}
    get contact() {return $('[data-test="contact-card-title"]')}
    get btnCallNumber(){ return $('[data-test="keyboard-button-dial"]')}
    get btnCallContact(){return $('[class="Call__SvgCall-a1f9zu-0 lxZBx"]')}
    get inputNumber() { return $('[data-test="keyboard-input-text"]')}
    

    open () {
        return super.open();
    }

    callNumber(number){
        this.inputNumber.setValue(number)
        this.btnCallNumber.click();
    }

    callContact(contact){
     $(`//*[text()='${contact}']`).click();
     this.btnCallContact.click();
    }

    navigateToContacts(){
        this.peopleTabBar.click();
        this.contactsMenu.click();
    }

}

module.exports = new PhonePage();
