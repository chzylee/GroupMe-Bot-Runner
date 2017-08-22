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
            "bot_id": '54168c31dbe618f8fd5739edd0',
            "text": text
        }
    }

    messageHandler(message) {
        this.setLower(message.text);
        return this.formTextReply(this.lower + 'pofo');
    }
    
}