'use strict';

const Author = require('../model/author');
const Note = require('../model/note');
const bodyParser = require('body-parser').json();
const debug = require('debug')('http:route-author');
const errorHandler = require('../lib/error-handler');

module.exports = function(router) {
    router.route('/author/:_id?')
        .get((req, res) => {
            debug(`${req.method}: ${req.url}`);

            if (req.params._id) {
                return Author.findById(req.params._id)
                    .then(author => res.status(200).json(author))
                    .catch(err => errorHandler(err, res));
            }

            Author.find()
                .then(authors => authors.map(a => ({ _id: a._id, name: a.name })))
                .then(ids => res.status(200).json(ids))
                .catch( err => errorHandler(err, res));
        })

        .post(bodyParser, (req, res) => {
            new Author(req.body).save()
                .then(author => res.status(201).json(author))
                .catch(err => errorHandler(err, res));
        })

        .put(bodyParser, (req, res) => {
            debug(`${req.method}: ${req.url}`);
            if (!req.params._id) errorHandler(new Error('Validation error: no ID, cannot update record.'));

            Author.findByIdAndUpdate(req.params._id, req.body, { upsert: true, runValidators: true })
                .then(author => {
                    res.sendStatus(204);
                    return author;
                })
                .catch(err => errorHandler(err, res));
        })

        .delete((req, res) => {
            debug(`${req.method}: ${req.url}`);
            if (!req.params._id) errorHandler(new Error('Validation error: no ID, cannot delete record.'));

            Author.findById(req.params._id)
                .then(author => {
                    author.notes.forEach(note => {
                        Note.findById(note)
                            .then(note => note.remove())
                            .catch(err => console.error(err));
                    });
                    return author;
                })
                .then(author => {
                    return author.remove();
                })
                .then(author => {
                    res.sendStatus(204);
                    return author;
                })
                .catch(err => errorHandler(err, res));
        });
};