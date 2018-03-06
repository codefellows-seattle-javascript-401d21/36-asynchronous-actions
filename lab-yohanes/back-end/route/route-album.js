'use strict';

const Album = require('../model/album');
const bodyParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');

module.exports = function (router) {
  router.route('/album/:_id?')
    .get((req, res) => {
      if (req.params._id) {
        return Album.findById(req.params._id)
          .then(album => res.status(200).json(album))
          .catch(err => errorHandler(err, res));
      }

      Album.find()
        .then(albums => albums.map(a => ({ _id: a._id, name: a.name })))
        .then(ids => res.status(200).json(ids))
        .catch(err => errorHandler(err, res));
    })
    .post(bodyParser, (req, res) => {
      new Album(req.body).save()
        .then(album => res.status(201).json(album))
        .catch(err => errorHandler(err, res));
    });
  // .put()
  // .delete()
};