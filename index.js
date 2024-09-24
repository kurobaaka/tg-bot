const telegramApi = require('node-telegram-bot-api')
const token = '7880249876:AAFOL6BKYH-QWQS7iwYNJuWTkM961es88u4'
const bot = new telegramApi(token, {pooling: true})
bot.on(event => 'message', listener => msg => {
    console.log(msg)
})