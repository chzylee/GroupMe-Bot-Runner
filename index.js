'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const bots = require('./src/botmap');
const handler = require('./src/main');

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// setup view
app.get('/', function(request, response) {
    response.sendfile('./views/main.html');
});

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/:botName', upload.array(), (req, res) => {   // when bot webhook is called
    if (req.body.sender_type !== 'bot') {               // if message was not sent by a bot
        var bot = bots.get(botName);                    // get corresponding bot
        console.log('running ' + botName);
        handler(bot, req.body);                         // handle message
        res.json(req.body);                             // return dummy response
    }
});

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});