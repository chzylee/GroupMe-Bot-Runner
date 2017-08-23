const request = require('request');
const utils = require('./utils');

module.exports = class GroupMeBot {
    constructor() {
        this.on = true;
        this.resUrl = 'https://api.groupme.com/v3/bots/post';
    }

    setLower(text) {
        this.lower = text.toLowerCase();
    }

    formTextReply(text, config) {
        return {
            "bot_id": config.botId,
            "text": text
        }
    }

    respond(message){
        var options = {
            uri: this.resUrl,
            method: "POST",
            json: message
        }
        
        request(options, (error, response, body) => {
            if(error !== undefined){
                console.log(error);
            }
        });
    }

    messageHandler(message, config) {
        console.log('handling message');
        console.log(message);
        this.setLower(message.text);
        var reply = this.formTextReply(this.lower + 'pofo', config);
        console.log('replying: ' + this.lower + 'pofo');
        this.respond(reply);
        return 999; 
    }
}