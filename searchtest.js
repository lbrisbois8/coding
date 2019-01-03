const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    var lastid = null;
    client.guilds.tap((guild) => {
        guild.search({
            author: '163471920359145472',
            contextSize: '0',
            before: lastid
        })
            .then((response) => {
                //lastid = response.messages[0][0].createdAt;
                console.log(response.messages[0]); 
                response.messages.forEach((array) => {
                    //console.log(response.messages);
                    array.forEach((message) => {
                    //console.log(message.content);
                    //console.log(response.message);
                    //console.log(guild.id);
                    
                    });
                });
            });

    });
});

client.login('MTM3MDM4OTE3MjY1MzkxNjE2.DmiVOw.Pm2tOTQW6AdMiyl5eDcpfVI538c');