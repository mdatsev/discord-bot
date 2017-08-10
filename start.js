const Discord = require('discord.js');
const colorsys = require('colorsys');

const bot = new Discord.Client();

const token = 'MjkyNjE1NTI2Njc5NTc2NTc2.DG2LvA._PJc8yQwZ6wIajbFQRnU3-ls0C4';

bot.on('ready', () => {
    console.log('I am ready!');
});

let commands = [{
        trigger: msg => msg.content.indexOf('ping') === 0,
        action: msg => msg.channel.sendMessage('pong')
    },
    {
        trigger: msg => msg.content.indexOf('avatar') === 0,
        action: msg => {
            let name = parameterize(msg.content).join(' ');
            let user = msg.mentions.members.last() ? msg.mentions.members.last().user : bot.users.find("username", name) || msg.guild.members.find(val => val.nickname == name).user;
            msg.channel.send(user.avatarURL);
        }
    }
];

bot.on('message', msg => {
    commands.forEach(command => {
        if (command.trigger(msg)) {
            command.action(msg);
        }
    });
});

bot.on('guildMemberAdd', member => {
    let messages = [`${member} just joined the server - glhf!`,
        `${member} just joined. Everyone, look busy!`,
        `${member} just joined. Can I get a heal?`,
        `${member} joined your party.`,
        `${member} joined. You must construct additional pylons.`,
        `Ermagherd. ${member} is here.`,
        `Welcome, ${member}. Stay awhile and listen.`,
        `Welcome, ${member}. We were expecting you ( ͡° ͜ʖ ͡°)`,
        `Welcome, ${member}. We hope you brought pizza.`,
        `Welcome ${member}. Leave your weapons by the door.`,
        `A wild ${member} appeared.`,
        `Swoooosh. ${member} just landed.`,
        `Brace yourselves. ${member} just joined the server.`,
        `${member} just joined. Hide your bananas.`,
        `${member} just arrived. Seems OP - please nerf.`,
        `${member} just slid into the server.`,
        `A ${member} has spawned in the server.`,
        `Big ${member} showed up!`,
        `Where’s ${member}? In the server!`,
        `${member} hopped into the server. Kangaroo!!`,
        `${member} just showed up. Hold my beer.`
    ]
    // Send the message to the guilds default channel (usually #general), mentioning the member
    var response = messages[Math.floor(Math.random() * messages.length)];
    member.guild.channels.get('345106817489043456').sendMessage(response)
});

function parameterize(content) {
    return content.split(' ').slice(1);
}

// log our bot in
bot.login(token);