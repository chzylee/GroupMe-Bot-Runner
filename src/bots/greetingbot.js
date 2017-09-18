'use strict'
const utils = require('../lib/utils');
const greetings = require('../lib/greetings');

module.exports = class GreetingBot {
    constructor(id) {
        this.name = 'greetingbot';
        this.id = id;
        this.greetings = greetings;
    }

    messageHandler(message) {
        var lower = message.text.toLowerCase();
        if(utils.startsWith(lower, ['hi', 'hello', 'good morning'])) {
            var reply = utils.formTextReply(utils.randomFrom(this.greetings), this.id);
            return reply;
        }
        else {
            return undefined;
        }
    }
}