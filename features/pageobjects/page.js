module.exports = class Page {
    open () {
        return browser.url(`https://phone.aircall.io/`)
    }
}
