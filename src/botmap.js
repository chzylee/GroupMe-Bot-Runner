'use strict'
const _seed = require('./bots/seedbot');
const _puns = require('./bots/punbot');

// configure bot selection
const bots = new Map();
bots.set('seedbot', new _seed(process.env.SEED_ID));
bots.set('punbot', new _puns(process.env.PUNS_ID))

module.exports = bots;