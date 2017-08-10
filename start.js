const Discord = require('discord.js');
const colorsys = require('colorsys');

const bot = new Discord.Client();

const token = 'MjkyNjE1NTI2Njc5NTc2NTc2.DG2LvA._PJc8yQwZ6wIajbFQRnU3-ls0C4';

bot.on('ready', () => {
    console.log('I am ready!');
});

let commands = [{
    trigger: message => message.content.indexOf('ping') === 0,
    action: message => message.channel.sendMessage('pong')
}];

bot.on('message', message => {
    commands.forEach(command => {
        if (command.trigger) {
            command.action(message);
        }
    });
});

// log our bot in
bot.login(token);