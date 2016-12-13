var Diff = require('../Diff.js');

describe('Screenshot verification', function () {
  var diff = new Diff(__dirname, 'west.html', 'west.png');
  it(diff.generateTestName(), function () {
    browser.setViewportSize({
      width: 500,
      height: 500
    });
    return diff.assureMatch(browser);
  });

});
