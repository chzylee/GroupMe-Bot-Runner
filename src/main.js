const utils = require('./utils');

module.exports = class GroupMeBot {
    constructor() {
        this.on = true;
    }

    setLower(text) {
        this.lower = text.toLowerCase();
    }

    formTextReply(text) {
        return {
            "bot_id": config.bot_id,
            "text": text
        }
    }

    messageHandler(message) {
        setLower(message.text);
        return formTextReply(this.lower + 'pofo');
    }
    
}