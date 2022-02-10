const assert = require('assert')
const { browser, element } = require("protractor");

describe('ProtractorTest', function() {
  let broswer
  
  beforeEach(function() {
  })
  
  afterEach(function() {
  })
  
  it('Add user', function() {
    browser.get("https://www.way2automation.com/angularjs-protractor/webtables/")
    element(by.css("td:nth-child(1) > .btn")).click()
    element(by.name("FirstName")).click()
    element(by.name("FirstName")).sendKeys("abc")
    element(by.name("LastName")).click()
    element(by.name("LastName")).sendKeys("abc")
    element(by.name("UserName")).click()
    element(by.name("UserName")).sendKeys("abcabc")
    element(by.name("Password")).click()
    element(by.name("Password")).sendKeys("abcabc")
    element(by.name("optionsRadios")).click()
    element(by.name("RoleId")).click()
    {
      const dropdown = element(by.name("RoleId"))
      dropdown.element(by.xpath("//option[. = 'Sales Team']")).click()
    }
    element(by.css("option:nth-child(2)")).click()
    element(by.name("Email")).click()
    element(by.name("Email")).sendKeys("abcabc@gmail.com")
    element(by.name("Mobilephone")).click()
    element(by.name("Mobilephone")).sendKeys("9876543210")
    element(by.css(".btn-success")).click()
    expect(element(by.xpath("//td[contains(text(),'abcabc')]")).isDisplayed()).toEqual(true);
  });

  it('Delete User', function() {
    element(by.css(".smart-table-data-row:nth-child(4) .icon-remove")).click()
    element(by.css(".btn-primary")).click()
    element.all(by.xpath("//td[contains(text(),'Novak')]")).then(function(items) {
      expect(items.length).toBe(0);
    });
    })
})
