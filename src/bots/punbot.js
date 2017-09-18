'use strict'
const utils = require('../utils');
const puns = require('../lib/puns');

module.exports = class SeedBot {
    constructor(id) {
        this.id = id;
        this.puns = puns;
    }

    messageHandler(message) {
        var lower = message.text.toLowerCase();
        if(utils.contains(lower, ['pun', 'dad joke'])) {
            var reply = utils.formTextReply(utils.randomFrom(this.puns), this.id);
            return reply;
        }
        else {
            return undefined;
        }
    }
}