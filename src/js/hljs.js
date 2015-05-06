var hljs = require('../../node_modules/highlight.js/lib/highlight');
// hljs.registerLanguage('javascript', require('../../node_modules/highlight.js/lib/languages/javascript'));
hljs.registerLanguage('better-javascript', require('./better-javascript'));

hljs.initHighlightingOnLoad();