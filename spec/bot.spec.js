'use strict'
const _bot = require('../src/main');

describe('GroupMe bot', function() {
    
    var bot, message;

    // create instance of bot
    beforeEach(function() {
        bot = new _bot();
    });

    // turn on before tests
    beforeEach(function(){
        bot.on = true;
    });

    beforeEach(function() {
        message = {
            "bot_id": '54168c31dbe618f8fd5739edd0',
            "text": ''
        }
    });

    it('adds pofo at end of text given', function() {
        message.text = 'hi';
        var reply = bot.messageHandler(message);
        expect(reply.text).toBe('hipofo');
    });
});