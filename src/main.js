const utils = require('./utils');

module.exports = class GroupMeBot {
    constructor() {
        this.on = true;
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

    messageHandler(message, config) {
        this.setLower(message.text);
        return this.formTextReply(this.lower + 'pofo', config);
    }
    
}