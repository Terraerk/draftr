/**
 * BoardController
 *
 * @description :: Server-side logic for managing managers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    team: function(req, res) {
        var teams = new Array();
        var draft;
        Draft.findOne({
            name: req.param('name')
        }).exec(function (err, foundDraft){
            if (err) return res(err);

            draft = foundDraft;
            Team.find({
                draft: draft.id
            }).exec(function (err, team) {
                if (err) return res(err);
                teams.push(team);
            });
        });


        var positions = {

        };
        return res.view('board/team', {
            teams: teams,
            positions: positions
        });
    }
};
