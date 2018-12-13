const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var userid = '152570331830288386';
  var messagecont = [];
  //var channelid = [];
  //client.channels.tap(channel => channelid.push(channel.id));
  //console.log(channelid)

    //console.log(client.channels.get('136941677058326529'));
    function getmessagecontent(channelid)
    {console.log(channelid)
    var channel1 = client.channels.get(channelid);
    var lastid = null;
    function messagesfunct() {
      

        channel1.fetchMessages({ limit: 100, before: lastid })
        .then((messages) => {

          var messageid = [];
          messages.tap((message) => {
            if (message.author.id == userid) { messagecont.push(message.content); }
            messageid.push(message.id);
            lastid = messageid.slice(-1)[0]
          });
          
          if (messages.size != 0) messagesfunct();
        });
        console.log(messagecont);

        
    }
    if (channel1.type != "voice" && channel1.type != "category")
    messagesfunct();
  }
  
var filteredguilds = client.guilds.filter((guild) => {
var filteredmembers = guild.members.filter((member) => member.id == userid) 
filteredmembers = filteredmembers.array();
if (filteredmembers.length > 0) return true;

  
})

filteredguilds.tap((guild) => {

  guild.channels.tap((channel) => {

    getmessagecontent(channel.id);
  })
})
console.log(messagecont.length);

//getmessagecontent(channelid);

});

client.login('MTM3MDM4OTE3MjY1MzkxNjE2.DmiVOw.Pm2tOTQW6AdMiyl5eDcpfVI538c');