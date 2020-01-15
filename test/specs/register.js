const assert = require('assert');
const { expect } = require('chai');

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
    element.setValue('VaTest');
    browser.pause(1000);
  });

  it('fill in Last name field', () => {
    const element = $('form input[name="lastName"]');
    element.setValue('TestV');
    browser.pause(1000);
  });

  it('fill in Cell phone number field', () => {
    const element = $('form input[name="phone"]');
    element.setValue('11234567899');
    browser.pause(1000);
  });

  it('fill in Email field', () => {
    const element = $('form input[name="email"]');
    element.setValue(Date.now() + 'vvv@yahoo.com');
    browser.pause(1000);
  });

  it('fill in Password field', () => {
    const element = $('form input[name="password"]');
    element.setValue('54321');
    browser.pause(1000);
  });

  it('fill in About field', () => {
    const element = $('form textarea[name="about"]');
    element.setValue('I am exist');
    browser.pause(1000);
  });

  it('fill in My goals field', () => {
    const element = $('form textarea[name="goals"]');
    element.setValue('no pain - no gain');
    browser.pause(1000);
  });

  it('select English Level', () => {
    const element = $('form select[name="englishLevel"]');
    element.selectByAttribute('value', 'Intermediate');
    browser.pause(1000);
  });

  it('click Submit button', () => {
    const element = $('form button[type="submit"]');
    element.click();
    browser.pause(5000);
  });

});
