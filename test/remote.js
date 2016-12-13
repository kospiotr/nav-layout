var assert = require('assert'),
  test = require('selenium-webdriver/testing'),
  webdriver = require('selenium-webdriver'),
  chrome = require('selenium-webdriver/chrome'),
  chromedriver = require('chromedriver');

test.describe('Google Search', function () {
  test.it('should work', function () {
    // chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    var driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .usingServer('http://localhost:4444/wd/hub')
      .build();
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value')
      .then(function (value) {
        assert.equal(value, 'simple programmer');
        driver.takeScreenshot().then(
          function (image, err) {
            require('fs').writeFile('out.png', image, 'base64', function (err) {
              console.log(err);
            });
          }
        );
      });
    driver.quit();
  });
});


