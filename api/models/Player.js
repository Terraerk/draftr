/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        bye: {type: 'string'},
        team: {model: 'team'},
        position: {type: 'string'}, //E.g. RB, WR, QB
        adp: {type: 'float'}, //average draft position overall. Not applicable for IDP
        positionRanking: {type: 'integer'} //e.g. RB1, WR2, etc. Just the number
    }
};

