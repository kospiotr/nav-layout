
var Diff = require('../Diff.js');

describe('Screenshot verification', function () {
  var diff = new Diff(__dirname, 'n-e-s-w.html', 'n-e-s-w.png');
  it(diff.generateTestName(), function () {
    browser.setViewportSize({
      width: 500,
      height: 500
    });
    return diff.assureMatch(browser);
  });

});
