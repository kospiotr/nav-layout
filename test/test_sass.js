var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({file: path.join(__dirname, 'list.spec.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'breakpoint.spec.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'media.spec.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'selectors.spec.scss')}, describe, it);
