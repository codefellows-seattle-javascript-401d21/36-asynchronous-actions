'use strict';

const mongoose = require('mongoose');
const Breed = require('./breed');

const Dog = mongoose.Schema({
    name: { type: String, require: true },
    age: { type: String, require: true },
    breed: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Breed' },
}, { timestamps: true });


Dog.pre('save', function (next) {
    Breed.findById(this.breed)
        .then(breed => {
            breed.dogs = [...new Set(breed.dogs).add(this._id)];
            breed.save();
        })
        .then(next)
        .catch(() => next(new Error('Validation Error. Failed to save dog')));
});

Dog.post('remove', function (doc, next) {
    Breed.findById(doc.breed)
        .then(breed => {
            breed.dogs = breed.dogs.filter(l => doc._id.toString() !== l.toString());
            breed.save();
        })
        .then(next)
        .catch(next);
});

module.exports = mongoose.model('dogs', Dog);