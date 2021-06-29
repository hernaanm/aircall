const Page = require('./page');

class LoginPage extends Page {

    get btnNext() { return $('[data-test="next-button"]')}

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
