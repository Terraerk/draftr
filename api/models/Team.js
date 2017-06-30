/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: {type: 'string', required: true}, //Team name
        draft: {model: 'draft'}, //Which Draft
        manager: {model: 'manager'}, //Which Manager
        order: {type: 'integer'}, //Which order the Manager chooses
        claims: {collection: 'claim'}, //Which players the Manager has claimed

        getRemainingBudget: function () {
            //Total budget of the draft, minus the cost of each claim
            var budget = this.draft.budget;
            for (var i in this.claims) {
                var claim = this.claims[i];
                budget -= claim.price;
            }
            return budget;
        },

        getMaximumBid: function () {
            //Max bid is the remaining budget, minus (required players remaining * minimum bid)
            return this.getRemainingBudget() - ((this.draft.getRequiredPlayersCount() - this.claims.length) * this.draft.minimumBid);
        },

        //Check whether the manager has enough free spots to bid on a player in the given position
        getCanBidOnPosition: function (p) {
            //first, check if the position is allowed

            //then check if position is filled
            for (var i in this.claims) {
                var claim = this.claims[i];
                budget -= claim.price;
            }

            //if filled, check if any other required position would be left empty if this position is taken
        }
    }
};
