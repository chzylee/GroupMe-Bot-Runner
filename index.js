'use strict';
const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
const _bot = require('./src/main');

// create LINE SDK config from env variables
const config = {
    botId: process.env.BOT_ID,
    groupId: process.env.GROUP_ID,
    accessToken: process.env.ACCESS_TOKEN
};

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
const bot = new _bot();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// setup view
app.get('/', function(request, response) {
    response.sendfile('./views/main.html');
});

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', upload.array(), (req, res) => {
    if (req.body.sender_type === 'bot') {
        res.end();
    }
    handleEvent(req.body);
    res.json(req.body);
});

// event handler
function handleEvent(message) {
    // handle message
    // console.log('logging message');
    // console.log(message);
    return bot.messageHandler(message, config);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});