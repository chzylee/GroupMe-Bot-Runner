'use strict'
const utils = require('../lib/utils');
const puns = require('../lib/puns');

module.exports = class PunBot {
    constructor(id) {
        this.name = 'punbot';
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