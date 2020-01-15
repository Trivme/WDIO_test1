const { expect } = require('chai');

const email = 'vwolkof@yahoo.com';
const password = '54321';

describe('login page - Login', () => {
  before(() => {
    browser.url('https://stage.pasv.us/user/login');
  });

  it('should have the right title', () => {
    const actual = $('h1').getText();

    const expected = 'User Login';
    expect(actual).equal(expected);
  });

  it('fill in login credentials', () => {
    const log = $('form input[name="email"]');
    const pass = $('form input[name="password"]');
    log.setValue(email);
    pass.setValue(password);
  });

  it('click Login button', () => {
    const element = $('form button[type="submit"]');
    element.click();
    browser.pause(3000);
  });

  it('should have a correct name on user page', () => {
    const element = $('//a[contains(@class,"dropdown-toggle nav-link")]');
    const actual = element.getText();
    const expected = 'VaTest TestV';
    expect(actual).equal(expected);
  });


});