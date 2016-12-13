var assert = require('assert');
var fs = require('fs');
var path = require('path');
var imageDiff = require('image-diff');

var thisBasePath = __dirname + "/";
var buildPath = path.resolve(__dirname, '../build') + '/';
var testBuildPath = path.join(buildPath, 'test') + '/';
var mountedPath = 'http://localhost:4567/root/test/';

module.exports = function Diff(basePath, sourceFileName, targetFileName) {
  basePath += "/";
  var me = this,
    inputFilePath = path.resolve(basePath, sourceFileName),
    targetFilePath = path.resolve(basePath, targetFileName),
    snapshotFileBasePath = path.join(testBuildPath, path.relative(thisBasePath, targetFilePath)),
    snapshotFilePath = snapshotFileBasePath + '.actual.png',
    expectedFilePath = snapshotFileBasePath + '.expected.png',
    snapshotFileDiffPath = snapshotFileBasePath + '.diff.png',
    url = mountedPath + path.relative(thisBasePath, inputFilePath),
    override = process.argv.indexOf('--override') >= 0;

  // console.log({
  //   inputFilePath: inputFilePath,
  //   targetFilePath: targetFilePath,
  //   snapshotFilePath: snapshotFilePath,
  //   snapshotFileDiffPath: snapshotFileDiffPath,
  //   url: url
  // });

  this.generateTestName = function () {
    return 'Expect recorded image: ' + snapshotFilePath + ' to be same as: ' + targetFilePath
  };

  this.assureMatch = function (browser) {
    // assert.ok(true, 'isOk');
    createSnapshot(browser, url, snapshotFilePath);
    if (!fs.existsSync(targetFilePath)) {
      createTmpImage(targetFilePath);
    }
    return compareImages(targetFilePath, snapshotFilePath, snapshotFileDiffPath)
      .then(function (match) {
        if (!match) {
          copyFile(targetFilePath, expectedFilePath);
          if (override) {
            copyFile(snapshotFilePath, targetFilePath);
          }
        }
        assert.ok(match, me.generateTestName());
        return match;
      });
  };

  function createSnapshot(browser, url, snapshotFilePath) {
    browser.url(url);
    createDirsForPath(path.parse(snapshotFilePath).dir);
    browser.saveScreenshot(snapshotFilePath);
  }

  function createDirsForPath(targetDir) {
    targetDir.split('/').forEach(function (dir, index, splits) {
      var parent = splits.slice(0, index).join('/');
      var dirPath = path.resolve(parent, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });
  }

  function compareImages(actualImage, expectedImage, diffImage) {
    return new Promise(function (resolve, reject) {
      imageDiff({
        actualImage: actualImage,
        expectedImage: expectedImage,
        diffImage: diffImage
      }, function (err, imagesAreSame) {
        if (err) {
          reject(err);
        } else {
          resolve(imagesAreSame);
        }
      });

    })
  }

  function copyFile(sourceFile, targetFile) {
    return fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
  }

  function createTmpImage(imageFilePath) {
    var tpl = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    fs.writeFileSync(imageFilePath, tpl, 'base64');
  }

};