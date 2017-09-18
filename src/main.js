'use strict'
const utils = require('./lib/utils');

function handler(bot, message){
    if(bot.status === 'off'){
        console.log('bot is off');
        return;
    }
    console.log('handling message:' + message.text + 'with bot ' + bot.name);
    var reply = bot.messageHandler(message);    // get reply from bot given message object
    if(reply) {
        utils.respond(reply);                   // make request to API with reply
    }
    else {
        console.log('no reply');
    }
}

module.exports = handler;