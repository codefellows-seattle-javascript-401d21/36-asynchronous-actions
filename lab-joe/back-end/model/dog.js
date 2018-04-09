'use strict';

const mongoose = require('mongoose');

const Breed = mongoose.Schema({
    name: { type: String, require: true },
    dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }],
}, { timestamps: true });

module.exports = mongoose.model('breeds', Breed);