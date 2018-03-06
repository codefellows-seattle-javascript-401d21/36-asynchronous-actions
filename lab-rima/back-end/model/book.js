'use strict';

const mongoose = require('mongoose');
const Language = require('./language');

const Book = mongoose.Schema({
  title : { type: String, require: true },
  author : { type: String, require: true },
  language : { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Languege' },
}, { timestamps: true });


Book.pre('save', function(next) {
  Language.findById(this.language)
    .then(language => {
      language.books = [...new Set(language.books).add(this._id)]; 
      language.save();
    })
    .then(next)
    .catch(() => next(new Error('Validation Error. Failed to save book')));
});

Book.post('remove', function(doc, next) {
  Language.findById(doc.language)
    .then(language => {
      language.books = language.books.filter(l => doc._id.toString() !== l.toString()); 
      language.save();
    })
    .then(next)
    .catch(next);
});

module.exports = mongoose.model('books', Book);
