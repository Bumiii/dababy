const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');
const message = require('./events/guild/message');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () => {
    var facts = ['yea yea', 'i pull up', 'https://youtu.be/U2JyeciEwSI', 'huh', 'https://youtu.be/KvuQNNVrbtM', 'less go']
    setInterval(function () {
        var fact = Math.floor(Math.random() * facts.length)
        const channel = client.channels.cache.get('849328935992426527')
        channel.send(`${facts[fact]}`);
        console.log(facts[fact]);
    }, 3600000)
});

client.on('ready', () => {
    client.user.setPresence({
        status: 'available',     //sets status button to green   
        activity: {
            name: `Fortnite`,    //This is the custom text  
            type: 'PLAYING'     //this is the type (duh). 'watching' would also be an option  
        }

    });
});

client.login(process.env.DISCORD_TOKEN);