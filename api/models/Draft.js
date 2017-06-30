/**
 * Draft.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            required: true
        },

        teams: {collection: 'team'},
        managers: {collection: 'manager', via: 'draft', through: 'team'},

        requiredPlayersQB: {type: 'integer', defaultsTo: 1},
        requiredPlayersRB: {type: 'integer', defaultsTo: 2},
        requiredPlayersWR: {type: 'integer', defaultsTo: 3},
        requiredPlayersTE: {type: 'integer', defaultsTo: 1},
        requiredPlayersFLEX: {type: 'integer', defaultsTo: 1},
        requiredPlayersK: {type: 'integer', defaultsTo: 1},
        requiredPlayersD: {type: 'integer', defaultsTo: 1},
        requiredPlayersDB: {type: 'integer', defaultsTo: 0},
        requiredPlayersDL: {type: 'integer', defaultsTo: 0},
        requiredPlayersLB: {type: 'integer', defaultsTo: 0},
        requiredPlayersDFLEX: {type: 'integer', defaultsTo: 0},

        bench: {type: 'integer', deafultsTo: 6},

        budget: {type: 'integer'},
        minimumBid: {type: 'integer', defaultsTo: 1},
        faabBudget: {type: 'integer'},

        getRequiredPlayersCount: function () {
            return this.requiredPlayersQB +
                this.requiredPlayersRB +
                this.requiredPlayersWR +
                this.requiredPlayersTE +
                this.requiredPlayersFLEX +
                this.requiredPlayersK +
                this.requiredPlayersD +
                this.requiredPlayersDB +
                this.requiredPlayersDL +
                this.requiredPlayersLB +
                this.requiredPlayersDFLEX;
        },

        getManagerCount: function () {
            return this.managers.length;
        }
    }
};

