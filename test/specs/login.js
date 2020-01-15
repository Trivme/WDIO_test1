const { expect } = require('chai');

const email = 'vwolkof@yahoo.com';
//import{password} from 'register';




describe('login page - Login', () => {
  before(() => {
    browser.url('https://stage.pasv.us/user/login');
  });

  it('should have the right title', () => {
    const actual = $('h1').getText();
    console.log(actual);
    const expected = 'User Login';
    expect(actual).equal(expected);
  });


});