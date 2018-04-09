'use strict';

const Dog = require('../model/dog');
const bP = require('body-parser').json();
const eH = require('../lib/error-handler');
const debug = require('debug')('http:route-dog');

module.exports = function (router) {

    debug('Inside of function(router) in route-dog.js');

    router.route('/dog/:_id?')

        .get((req, res) => {

            debug(`Inside of get method. method and url: ${req.method}: ${req.url}`);

            // get a specific data
            if (req.params._id) {

                debug(`Inside of get one. id: ${req.params._id}`);

                return Dog.findById(req.params._id)
                    .then(dog => res.status(200).json(dog))
                    .catch(err => eH(err, res));
            }

            debug(`Inside of get all.`);
            // get all data
            return Dog.find()
                .then(dogs => {
                    if (dogs === null) throw new Error('enoent');
                    if (dogs) res.status(200).json(dogs);
                })
                .catch(err => eH(err, res));

        })

        .post(bP, (req, res) => {

            debug(`Inside of post method. method and url: ${req.method}: ${req.url}`);

            new Dog(req.body).save()
                .then(dog => res.status(201).json(dog))
                .catch(err => eH(err, res));
        })

        .put(bP, (req, res) => {

            debug(`Inside of put method. method and url: ${req.method}: ${req.url}`);

            return Dog.findByIdAndUpdate(req.params._id, req.body)
                .then(dog => res.status(204).json(dog))
                .catch(err => eH(err, res));
        })

        .delete((req, res) => {

            debug(`Inside of delete method. method and url: ${req.method}: ${req.url}`);

            // delete a specific data
            if (req.params._id) {

                debug(`Delete one data. id: ${req.params._id}`);

                return Dog.findById(req.params._id)
                    .then(dog => dog.remove())
                    .then(() => res.status(204).end())
                    .catch(err => eH(err, res));
            }

            debug('delete all');

            // delete all data
            return Dog.remove({})
                .then(() => res.status(200).end())
                .catch(err => eH(err, res));

        });
};