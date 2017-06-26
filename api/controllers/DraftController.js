/**
 * DraftController
 *
 * @description :: Server-side logic for managing drafts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    //socket request to create a new draft
    makeNew: function (req, res) {
        data = req.params.all();
        if (req.isSocket && req.method === 'POST') {
            Draft.create(data).exec(function(error, data) {
                Draft.publishCreate({
                    id: data.id,
                    name: data.name,
                    date: '2017-06-23 00:00:00'
                });
            });
        }
        return res.view();
    },

    lobby: function (req, res) {
        return res.view();
    },

    join: function (req, res) {
        sails.sockets.join(req, 'lobby', function() {
            sails.log.debug('this happened');
        });
        return res.json({message: 'Doneski'});
    }
};

