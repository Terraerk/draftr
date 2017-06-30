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
        res.view();
    },

    room: function (req, res) {
        var draftId = req.param('draft', null);
        if (draftId === null) {
            return res.location('/draft/lobby');
        }

        Draft.findOne({id: draftId}).exec(function(error, data){
            if (error) return res.serverError(error);
            return res.view({draft: data});
        });
    },

    join: function (req, res) {
        if (req.isSocket) {
            var draftId = req.param('draft', null);
            if (draftId === null) {
                return res.serverError('No draftId passed!');
            }
            sails.sockets.join(req, 'lobby_' + draftId, function() {
                sails.log.debug('this happened');
            });
            return res.ok();
        }
        return res.error('Not a socket request!');
    }
};

