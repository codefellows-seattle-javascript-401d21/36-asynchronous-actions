'use strict';

const mongoose = require('mongoose');

const Owner = module.exports = mongoose.Schema({
  name: {type: String, max: 32},
  cats: [{type: mongoose.Schema.Types.ObjectId, ref: 'cat'}],
  updating: { type: Boolean, default: false },
});

module.exports = mongoose.model('owner', Owner);