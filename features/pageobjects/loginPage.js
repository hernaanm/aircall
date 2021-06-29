const Page = require('./page');

class LoginPage extends Page {

    get inputUser () { return $('[class="TextFieldInput__TextFieldInputComponent-sc-1y2grzu-0 fQPIDU"]') }
    get inputPassword () { return $('[type="password"]') }
    get btnLogin() { return $('[data-test="signin-button"]')}


    login (user, password) {
        this.inputUser.setValue(user);
        this.inputPassword.setValue(password);
        this.btnLogin.click(); 
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
