'use strict'
const _seed = require('./bots/seedbot');

// configure bot selection
const bots = new Map();
bots.set('seedbot', new _seed(process.env.SEED_ID));

module.exports = bots;