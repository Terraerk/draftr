/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: {type: 'string', required: true}, //Team name
        draft: {model: 'Draft'}, //Which Draft
        manager: {model: 'Manager'}, //Which Manager
        draftOrder: {type: 'integer'}, //Which order the Manager chooses
        draftClaims: {collection: 'Claim'}, //Which players the Manager has claimed


        getRemainingBudget: function () {
            //Total budget of the draft, minus the cost of each claim
            var budget = this.draft.budget;
            for (var i in this.draftClaims) {
                var claim = this.draftClaims[i];
                budget -= claim.price;
            }
            return budget;
        },

        getMaximumBid: function () {
            //Max bid is the remaining budget, minus (required players remaining * minimum bid)
            return this.getRemainingBudget() - ((this.draft.getRequiredPlayersCount() - this.claims.length) * this.draft.minimumBid);
        }
    }
};
