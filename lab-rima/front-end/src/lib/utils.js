const utils = module.exports = {};

utils.renderIf = (test, component) => test ? component : undefined;
utils.log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
utils.logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;
utils.classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ');
utils.map = (child, ...args) => Array.prototype.map.apply(child, args);
utils.filter = (child, ...args) => Array.prototype.filter.apply(child, args);
utils.reduce = (child, ...args) => Array.prototype.reduce.apply(child, args);
