const request = require('request');
const utils = require('./utils');

module.exports = class GroupMeBot {
    constructor() {
        this.on = true;
        this.baseUrl = 'https://api.groupme.com/v3';
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
            uri: this.baseUrl + "/bots/post",
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
        this.setLower(message.text);
        var reply = this.formTextReply(this.lower + 'pofo', config);
        this.respond(reply);
        return 999; 
    }
}