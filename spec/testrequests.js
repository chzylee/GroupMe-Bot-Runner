'use strict'
const request = require('request');
    
(function() {
    var config = {
        botId: process.env.BOT_ID,
        groupId: process.env.GROUP_ID,
        accessToken: process.env.ACCESS_TOKEN
    };

    var baseUrl = 'https://api.groupme.com/v3';

    var message = {
        "message": {
            "source_guid": "GUID",
            "text": "",
            "attachments": []
            }
    }

    var messageOpt = {
        uri: baseUrl + "/groups/" + config.groupId + "/messages",
        method: "POST",
        json: message
    }

    request(messageOpt, (error, response, body) => {
        console.log(response);
    });
}());