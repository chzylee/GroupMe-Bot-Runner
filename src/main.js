'use strict'
const utils = require('./utils');

function handler(bot, message){
    var reply = bot.messageHandler(message);    // get reply from bot
    utils.respond(reply);                       // make request to API with reply
}

module.exports = handler;