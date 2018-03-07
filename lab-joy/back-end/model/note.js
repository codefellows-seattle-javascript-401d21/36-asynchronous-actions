'use strict';

const mongoose = require('mongoose');
const Author = require('./author');
const debug = require('debug')('http:model-note'); // eslint-disable-line

const Note = mongoose.Schema({
    'title': { type: String, require: true },
    'content': { type: String, require: true },
    'important': { type: String },
    'author': { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'author' },
}, { timestamps: true });

Note.pre('save', function(next) {
    Author.findById(this.author)
        .then(author => {
            author.notes = [...new Set(author.notes).add(this._id)];
            author.save();
        })
        .then(next)
        .catch(() => next(new Error('Validation Error. Failed to save note because author does not exist.')));
});

module.exports = mongoose.model('note', Note);
