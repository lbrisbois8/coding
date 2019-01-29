require('dotenv').config()
const Discord = require('discord.js');

const client = new Discord.Client();
var lastid = null;
var doneWithGuild = false;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    searchGuildList(client.guilds); 
    
});

client.login(process.env.TOKEN);


function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));  
}


async function searchGuildList(guildCollection)
{
    let guilds = guildCollection.array(); // Turn into array,  because I don't know how to use async functions inside a tap function

    for (i = 0; i < guilds.length; i++) {  // Old school for loop, which arrays don't have

       guildObj = guildCollection.get(guilds[i].id); // get the guild Object so we can access methods
       searchguild(guildObj); //search that sucker

        while(doneWithGuild==false) // Keeps watch on the global flag to know if guild we are currently searching is done
        {
            console.log('still here', guildObj.id, doneWithGuild); 
            await sleep(2000);  // wait 2 second before checking again
        }
    };
    
  
}

 function searchguild(guild)
        {
            console.log(guild.id);
            doneWithGuild = false; // make sure false when starting a guild

             guild.search({
                    author: '163471920359145472',
                    contextSize: '0',
                    before: lastid
                })
                    .then((response) => {
                        //lastid = response.messages[0][0].createdAt;
                        //console.log(response.messages[0]); 
                       
                        lastid = response.messages[response.messages.length-1][0].createdAt; // identify the last time stamp for the next possible request
                        //console.log(lastid)
                        response.messages.forEach((array) => { //loop through the response
                            array.forEach((message) => {

                                 console.log(guild.id, message.content); // this is the message content for each messages
                            
                            
                            });
                        });

                        if(response.messages.length != 0){ // check to see if response has messages
                             searchguild(guild);
                             doneWithGuild = false; // There are more messages to be had, keep false
                        }
                        else{
                            doneWithGuild = true; // There are no more messages to be had, set true.
                        }
                    

                    }).catch(e=>{
                        // if there's an error, just move onto the next guild. 
                        console.log(e);// log error
                        doneWithGuild = true;// set true so the while lopo can move to the next guild.
                    
                    });

                   
            
        }



