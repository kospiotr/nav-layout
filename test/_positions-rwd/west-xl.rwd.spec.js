
    var Diff = require('../Diff.js');

    var prefix = 'west-xl';

    describe('Screenshot verification', function () {
      var diff_mini = new Diff(__dirname, prefix + '.rwd.html', prefix + '-xs.rwd.png');
      it(diff_mini.generateTestName(), function () {
        browser.setViewportSize({
          width: 470,
          height: 470
        });
        return diff_mini.assureMatch(browser);
      });

      var diff_small = new Diff(__dirname, prefix + '.rwd.html', prefix + '-s.rwd.png');
      it(diff_small.generateTestName(), function () {
        browser.setViewportSize({
          width: 758,
          height: 758
        });
        return diff_small.assureMatch(browser);
      });

      var diff_medium = new Diff(__dirname, prefix + '.rwd.html', prefix + '-m.rwd.png');
      it(diff_medium.generateTestName(), function () {
        browser.setViewportSize({
          width: 950,
          height: 950
        });
        return diff_medium.assureMatch(browser);
      });

      var diff_large = new Diff(__dirname, prefix + '.rwd.html', prefix + '-l.rwd.png');
      it(diff_large.generateTestName(), function () {
        browser.setViewportSize({
          width: 1120,
          height: 1120
        });
        return diff_large.assureMatch(browser);
      });

      var diff_xlarge = new Diff(__dirname, prefix + '.rwd.html', prefix + '-xl.rwd.png');
      it(diff_xlarge.generateTestName(), function () {
        browser.setViewportSize({
          width: 1300,
          height: 1300
        });
        return diff_xlarge.assureMatch(browser);
      });

    });
      
