'use strict'
const utils = require('../utils');

module.exports = class SeedBot {
    constructor(id) {
        this.name = 'seedbot'
        this.id = id;
    }

    messageHandler(message) {
        var reply = utils.formTextReply(message.text, this.id);
        return reply;
    }
}