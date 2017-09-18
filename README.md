# GroupMe Bot Runner

Server that runs a set of provided GroupMe bots. When a bot's webhook is called, given bot is summoned and handles the received message. Inspired by https://github.com/kyle1320/groupme-bot.

## Bot Structure

Bots are non-human members of GroupMe groups that respond to messages automatically. Each bot in this runner has a handler that decides what to do with the message it receives, and that handler returns an appropriate response for that bot. Each bot is created using its unique ID, which is obtained as an environment variable. Bots can be reused in more than one group; however, due to GroupMe structure, a new bot must be created in GroupMe developers site and the new ID must be exported for the new bot.

### Seedbot

Seedbot is the most basic bot. It simply repeats what was last said. It has the most simple setup and the cleanest, plainest handler. Any other bot can begin with the code in [seedbot.js](./src/bots/seedbot.js).

## Server

This bot runner runs on an Express.js server that simply responds to post requests made to the webhook URLs of the bots in this runner. it checks the bot name and summons the corresponding bot to respond. This server is currently deployed on Heroku, and all bot IDs are set as Heroku config vars. Bots used in this server are created and listed in [botmap.js](./src/botmap.js).

## Utilities

All utility functions in [utils.js](./src/lib/utils.js) are simple functions that all bots may need. These provide basic functions such as checking matching parts of strings, and creating the actual response message. To use these utilities, import utils.js and call the functions from it.
