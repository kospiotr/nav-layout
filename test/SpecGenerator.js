var fs = require('fs');
var path = require('path');

var files = getFiles(__dirname).filter(function (file) {
  return file.endsWith('.html');
}).map(function (file) {
  var filePath = path.parse(file);
  return {
    base: filePath.dir,
    fileName: filePath.name,
    htmlFile: filePath.base,
    imageFile: filePath.name + '.png',
    testFile: filePath.name + '.spec.js',
    getPathFor: function (property) {
      return path.join(this.base, this[property]);
    }
  }
}).forEach(function (mappings) {
  var testFilePath = mappings.getPathFor('testFile');

  if (!fs.existsSync(testFilePath)) {
    var tpl = mappings.htmlFile.indexOf('.rwd.html') > 0 ?
      `
    var Diff = require('../Diff.js');

    var prefix = '${mappings.fileName.replace('.rwd', '')}';

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
      
` :
      `
var Diff = require('../Diff.js');

describe('Screenshot verification', function () {
  var diff = new Diff(__dirname, '${mappings.htmlFile}', '${mappings.imageFile}');
  it(diff.generateTestName(), function () {
    browser.setViewportSize({
      width: 500,
      height: 500
    });
    return diff.assureMatch(browser);
  });

});
`;
    console.log('missing test: ' + testFilePath);
    fs.writeFileSync(testFilePath, tpl, 'utf8');
  }

});


function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + (dir.endsWith('/') ? '' : '/') + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}