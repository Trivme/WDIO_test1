const assert = require('assert')

describe('register page', () => {

    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should have the right title', () => {
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })

    it('should have a correct title', () => {
       const actH1text = $('h1').getText();
       const expH1text = 'User Register';
       assert.equal(actH1text, expH1text);
    })

})