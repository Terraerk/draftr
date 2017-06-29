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
        if (req.isSocket) {
            var room = req.param('room', null);
            if (room === null) {
                return res.error('No room passed!');
            }
            sails.sockets.join(req, 'lobby_' + room, function() {
                sails.log.debug('this happened');
            });
            return res.json({message: 'Doneski'});
        }
        return res.error('Not a socket request!');
    }
};

