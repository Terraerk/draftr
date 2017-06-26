/**
 * Claim.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        player: { model: 'player' }, //Player claimed
        manager: { model: 'manager' }, //Manager who claimed the player
        price: { type: 'integer' }, //How much was paid for the player
        order: { type: 'integer' } //Order in which the player was claimed (starts at 1)
    }
};

