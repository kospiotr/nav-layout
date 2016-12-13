var assert = require('assert');
var phantom = require('phantom');
var imageDiff = require('image-diff');

var testPath = __dirname + "/";
var buildPath = __dirname + '/../build/test/';

var fs = require('fs');

var reduced = getFiles(testPath + 'positions').reduce(function (acc, item, index, items) {
  if (item.toLowerCase().endsWith('.html')) {
    var pngFile = item.replace(/....$/, 'png');
    if (items.indexOf(pngFile) >= 0) {
      acc.push({
        source: item,
        target: pngFile
      });

    }
  }
  return acc;
}, []);

console.log(reduced);

describe('Regressions', function () {

  reduced.forEach(function (testCase) {
    it('should match ' + testCase.source + ' with ' + testCase.target, function () {
      return compare(testCase.source, testCase.target).then(function (match) {
        assert.ok(match, 'Expect recorded image: ' + testCase.source + ' to be same as: ' + testCase.target);
      });
    });

  });


  var phantomjs;

  before(function (done) {
    phantom.create().then(function (_phantomjs) {
      phantomjs = _phantomjs;
      done();
    });
  });

  after(function () {
    return phantomjs.exit();
  });

  function compare(sourceHtmlPath, targetImg) {
    return new Promise(function (resolve, reject) {
      phantomjs.createPage().then(function (page) {
        page.viewportSize = {width: 100, height: 100};
        console.log('page created');
        console.log('opening: ' + 'file://' + sourceHtmlPath);
        page.open('file://' + sourceHtmlPath).then(function (status) {
          console.log('opened page: ' + 'file://' + sourceHtmlPath);

          var buildImgPath = targetImg.replace(testPath, buildPath);

          console.log('buildPath: ' + buildImgPath);

          page.render(buildImgPath)
            .then(function (status) {
              console.log('page rendered');
              console.log('comparing files: ' + targetImg + ' and: ' + buildImgPath);

              imageDiff({
                actualImage: buildImgPath,
                expectedImage: targetImg,
                diffImage: buildImgPath + '.diff.png'
              }, function (err, imagesAreSame) {
                console.log('compared');
                if (err) {
                  reject(err);
                } else {
                  console.log('Images are the same: ' + imagesAreSame);
                  resolve(imagesAreSame);
                }
              });
            });
        });

      });

    });
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