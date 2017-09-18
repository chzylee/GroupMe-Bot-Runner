'use strict'
const _seed = require('./bots/seedbot');
const _puns = require('./bots/punbot');
const _greetings = require('./bots/greetingbot');

// configure bot selection
const bots = new Map();
bots.set('seedbot', new _seed(process.env.SEED_ID));
bots.set('punbot', new _puns(process.env.PUN_ID));
bots.set('punbot2', new _puns(process.env.PUN2_ID));
bots.set('greetingbot', new _greetings(process.env.GREET_ID));

module.exports = bots;