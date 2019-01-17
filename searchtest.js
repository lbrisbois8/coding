require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var lastid = null;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.guilds.tap((guild) => {
        searchguild(guild)

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
                response.messages.forEach((array) => {
                    array.forEach((message) => {

                    console.log(message.content);
                    
                    
                    });
                });
                if(response.messages.length != 0) searchguild(guild)
            });
            
        }
client.login(process.env.TOKEN);