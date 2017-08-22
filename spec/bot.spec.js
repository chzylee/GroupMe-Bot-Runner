'use strict'
const _bot = require('../src/main');

describe('GroupMe bot', function() {
    
    var bot, message, config;

    // create instance of bot
    beforeEach(function() {
        bot = new _bot();
    });

    beforeEach(function() {
        config = {
            botId: process.env.BOT_ID,
            groupId: process.env.GROUP_ID,
            accessToken: process.env.ACCESS_TOKEN
        };
    });

    // turn on before tests
    beforeEach(function(){
        bot.on = true;
    });

    beforeEach(function() {
        message = {
            "bot_id": config.botId,
            "text": ''
        }
    });

    it('adds pofo at end of text given', function() {
        message.text = 'hi';
        var reply = bot.messageHandler(message, config);
        expect(reply.text).toBe('hipofo');
    });
});