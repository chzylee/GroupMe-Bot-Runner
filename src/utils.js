const request = require('request');

module.exports = {

    contains(lower, options) {
        for(var i = 0; i < options.length; i++) {        // for all options
            if(lower.includes(options[i])) {   // if lower contains one of options
                return true; // does contain one of options
            }
        }
        return false; // if none of the options returned true
    },

    startsWith(lower, options) {
        for(var i = 0; i < options.length; i++) {        // for all options
            if(lower.startsWith(options[i])) {   // if lower starts with one of options
                return true; // does start with one of options
            }
        }
        return false; // if none of the options returned true
    },

    formTextReply(text, botId) {
        return {
            "bot_id": botId,
            "text": text
        }
    },

    respond(message){
        var options = {
            uri: "https://api.groupme.com/v3/bots/post",
            method: "POST",
            json: message
        }
        request(options, (error, response, body) => {
            if(error){
                console.log(error);
            }
        });
    }

}