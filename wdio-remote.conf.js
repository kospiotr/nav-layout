var merge = require('deepmerge');
var wdioConf = require('./wdio-common.conf.js');

exports.config = merge(wdioConf.config, {
  host: 'localhost',
  port: 4444,
  path: '/wd/hub',
  logLevel: 'verbose',

});


