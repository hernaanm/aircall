const Page = require('./page');

class LanguagePage extends Page {

    get defaultLanguage () { return $('[class="Box-sc-14d2slk-0 Typography-sc-1ucmpew-0 gOHRiF htejBc"]') }
    get btnNext() { return $('[data-test="continue-button"]')}
    

    clickButton(button){
       
    }
}

module.exports = new LanguagePage();
