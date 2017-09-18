'use strict'
const utils = require('./utils');

function handler(bot, message){
    console.log('handling message:' + message.text);
    var reply = bot.messageHandler(message);    // get reply from bot given message object
    if(reply){
        utils.respond(reply);                   // make request to API with reply
    }
}

module.exports = handler;