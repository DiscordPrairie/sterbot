const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ4MzUwNzE2MDE5NzM2NTk3.X0cJ6g.f29gDKfwqyb3x3spXhcFYh7yRfw';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);