const Discord = require('discord.js');
const client = new Discord.Client();
var lastid = null;
var lastlength;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.guilds.tap((guild) => {
        while(lastlength != 0)
        searchguild(guild, lastid)

    });
});
function searchguild(guild, lastid = null)
        {
        guild.search({
            author: '163471920359145472',
            contextSize: '0',
            before: lastid
        })
            .then((response) => {
                //lastid = response.messages[0][0].createdAt;
                //console.log(response.messages[0]); 
                const lastid = response.messages[response.messages.length-1][0].createdAt;
                //console.log(lastid)
                lastlength = response.messages.length;
                response.messages.forEach((array) => {
                    array.forEach((message) => {

                    //console.log(message.content);
                    
                    
                    });
                });
                 searchguild(guild)
            });
            
        }
client.login('MTM3MDM4OTE3MjY1MzkxNjE2.DmiVOw.Pm2tOTQW6AdMiyl5eDcpfVI538c');