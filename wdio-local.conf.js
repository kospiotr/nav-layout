var merge = require('deepmerge');
var wdioConf = require('./wdio-common.conf.js');

exports.config = merge(wdioConf.config, {});

exports.config.services.push('selenium-standalone');

