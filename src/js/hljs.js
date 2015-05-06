var hljs = require('../../node_modules/highlight.js/lib/highlight');
// hljs.registerLanguage('javascript', require('../../node_modules/highlight.js/lib/languages/javascript'));
hljs.registerLanguage('better-javascript', require('./better-javascript'));
hljs.registerLanguage('xml', require('../../node_modules/highlight.js/lib/languages/xml'));
hljs.registerLanguage('css', require('../../node_modules/highlight.js/lib/languages/css'));

hljs.initHighlightingOnLoad();