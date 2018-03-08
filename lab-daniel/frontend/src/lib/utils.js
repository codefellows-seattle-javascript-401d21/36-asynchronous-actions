const utils = module.exports = {};

utils.renderIf = (condition, element) => condition? element : undefined;