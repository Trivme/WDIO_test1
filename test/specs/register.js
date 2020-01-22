//const assert = require('assert');
const { expect } = require('chai');

const URL_REGISTER = 'https://stage.pasv.us/user/register';

const user = {
  email: Date.now() + 'vv@yahoo.com',
  password: '54321',
  firstName: 'VaTest',
  lastName: 'TestV',
  cellPhone: 11234567899,
  about: 'No pain - no gain',
  lang: 'Nativ'
};

const pageRegister = {
  title: 'Progress Monitor',
  h1: 'User Regisrer',
  deck: 'Profile with fictitious or dummy data will be detected.',
  buttonText: 'Submit'
};


const email = Date.now() + 'vv@yahoo.com';
const firstName = 'VaTest';
const lastName = 'TestV';
const cellPhone =  11234567899;
const password = '54321';
module.exports = {firstName, lastName, cellPhone, password};

describe('register page', () => {
  before(() => {
    browser.url('https://stage.pasv.us/user/register');
  });

  it('should have the right title', () => {
    const actual = browser.getTitle();
    const expected = 'Progress Monitor';
    expect(actual).equal(expected);
  });

  it('should have a correct title', () => {
    const actual = $('h1').getText();
    const expected = 'User Register';
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const actual = $('p').getText();
    const expected = 'Profiles with fictitious or dummy data will be deleted.';
    expect(actual).equal(expected);
  });

  it('should have a correct submit button text', () => {
    const actual = $('//button[@type="submit"]').getText();
    const expected = 'Submit';
    expect(actual).equal(expected);
  });
});

describe('register page - Register new user', () => {

  it('fill in First name field', () => {
    const element = $('form input[name="firstName"]');
    element.setValue(firstName);
  });

  it('fill in Last name field', () => {
    const element = $('form input[name="lastName"]');
    element.setValue(lastName);
  });

  it('fill in Cell phone number field', () => {
    const element = $('form input[name="phone"]');
    element.setValue(cellPhone);
  });

  it('fill in Email field', () => {
    const element = $('form input[name="email"]');
    element.setValue(email);
  });

  it('fill in Password field', () => {
    const element = $('form input[name="password"]');
    element.setValue(password);
  });

  it('fill in About field', () => {
    const element = $('form textarea[name="about"]');
    element.setValue('I am exist');
  });

  it('fill in My goals field', () => {
    const element = $('form textarea[name="goals"]');
    element.setValue('no pain - no gain');
  });

  it('select English Level', () => {
    const element = $('form select[name="englishLevel"]');
    element.selectByAttribute('value', 'Intermediate');
  });

  it('click Submit button', () => {
    const element = $('form button[type="submit"]');
    element.click();
    browser.pause(5000);
  });

});
