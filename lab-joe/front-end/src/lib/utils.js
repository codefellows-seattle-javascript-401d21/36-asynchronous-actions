const utils = module.exports = {};
utils.renderIf = (test, component) => test ? component : undefined;
utils.log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
utils.logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;