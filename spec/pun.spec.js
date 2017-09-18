'use strict'
const bots = require('../src/botmap');
const handler = require('../src/main');

describe('GroupMe bot', function() {
    
    var bot, message;

    // create instance of bot
    beforeEach(function() {
        bot = bots.get('punbot');
    });

    // turn on before tests
    beforeEach(function(){
        bot.on = true;
    });

    beforeEach(function() {
        message = {
            "bot_id": bot.id,
            "text": ""
        }
    });

    it('echos message given', function() {
        message.text = "pun";
        var reply = bot.messageHandler(message);
        // console.log(reply.text);
        expect(bot.puns.includes(reply.text)).toBe(true);
    });
});