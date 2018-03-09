'use strict';

const Note = require('../model/note');
const Author = require('../model/author');
const bodyParser = require('body-parser').json();
const debug = require('debug')('http:route-note');
const errorHandler = require('../lib/error-handler');

module.exports = router => {
    router.route('/note/:_id?')
        .get((req, res) => {
            debug(`${req.method}: ${req.url}`);

            if (req.params._id) {
                return Note.findById(req.params._id)
                    .populate('author')
                    .then(note => res.status(200).json(note))
                    .catch(err => errorHandler(err, res));
            }

            Note.find()
                .then(notes => res.status(200).json(notes))
                .catch(err => errorHandler(err, res));
        })

        .post(bodyParser, (req, res) => {
            debug(`${req.method}: ${req.url}`);

            new Note(req.body).save()
                .then(note => res.status(201).json(note))
                .catch(err => errorHandler(err, res));
        })

        .put(bodyParser, (req, res) => { 
            debug(`${req.method}: ${req.url}`);
            if (!req.params._id) errorHandler(new Error('Validation error: no ID, cannot update record.'));

            Note.findById(req.params._id, { 'title': req.body.title, 'content': req.body.content, 'author': req.body.author, 'important': req.body.important }, { upsert: true, runValidators: true })
                .then(note => {
                    console.log('note update: ', note);
                    note.title = req.body.title;
                    note.content = req.body.content;
                    note.important = req.body.important;
                    return note.save();
                })
                .then(note => {
                    res.sendStatus(204);
                    return note;
                })
                .catch(err => errorHandler(err, res));
        })

        .delete((req, res) => {
            debug(`${req.method}: ${req.url}`);
            if (!req.params._id) errorHandler(new Error('Validation error: no ID, cannot delete record.'));
            Note.findById(req.params._id)
                .then(note => note.remove())
                .then(note => { 
                    Author.findById(note.author)
                        .then(author => {
                            author.notes = author.notes.filter(e => e.toString() !== note._id.toString());
                            return author.save();
                        })
                        .catch(err => console.error(err));
                    return note;
                })
                .then(note => {
                    res.sendStatus(204);
                    return note;
                })
                .catch(err => errorHandler(err, res));
        });
};