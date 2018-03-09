'use strict';

const mongoose = require('mongoose');

const Author = mongoose.Schema({
    name: { type: String, required: true },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'note' }],
});

module.exports = mongoose.model('author', Author);