'use strict';

const Breed = require('../model/breed');
const bP = require('body-parser').json();
const eH = require('../lib/error-handler');
const debug = require('debug')('http:route-breed');

module.exports = function (router) {

    debug('Inside of function(router) in route-breed.js');

    router.route('/breed/:_id?')

        .get((req, res) => {

            debug(`Inside of get method. method and url: ${req.method}: ${req.url}`);

            // get a specific data
            if (req.params._id) {

                debug(`Inside of get one. id: ${req.params._id}`);

                return Breed.findById(req.params._id)
                    .then(breed => res.status(200).json(breed))
                    .catch(err => eH(err, res));
            }

            debug(`Inside of get all.`);
            // get all data
            return Breed.find()
                .then(breeds => res.status(200).json(breeds))
                .catch(err => eH(err, res));

        })

        .post(bP, (req, res) => {

            debug(`Inside of post method. method and url: ${req.method}: ${req.url}`);

            new Breed(req.body).save()
                .then(breed => res.status(201).json(breed))
                .catch(err => eH(err, res));
        })

        .put(bP, (req, res) => {

            debug(`Inside of put method. method and url: ${req.method}: ${req.url}`);

            return Breed.findByIdAndUpdate(req.params._id, req.body)
                .then(breed => res.status(204).json(breed))
                .catch(err => eH(err, res));
        })

        .delete((req, res) => {

            debug(`Inside of delete method. method and url: ${req.method}: ${req.url}`);

            // delete a specific data
            if (req.params._id) {

                debug(`Delete one data. id: ${req.params._id}`);

                return Breed.findByIdAndRemove(req.params._id)
                    .then(() => res.status(204).end())
                    .catch(err => eH(err, res));
            }

            debug('delete all');

            // delete all data
            return Breed.remove()
                .then(() => res.status(200).end())
                .catch(err => eH(err, res));

        });
};