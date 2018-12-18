const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var userid = '277667582067212289';
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
  client.guilds.tap((guild)=>{
    guild.fetchMembers()
    .then((guildfullmembers) => {
        //(console.log(guildfullmembers.name+' has '+guildfullmembers.members.array().length+' members' ));

var filteredmembers = guildfullmembers.members.filter((member) => member.id == userid) 
filteredmembers = filteredmembers.array();
if (filteredmembers.length > 0)
{console.log(userid+'was found in '+guildfullmembers.name);
guildfullmembers.channels.tap((channel) => {

    getmessagecontent(channel.id);
  })
}
})
})




//console.log(messagecont.length);

//getmessagecontent(channelid);

});

client.login('MTM3MDM4OTE3MjY1MzkxNjE2.DmiVOw.Pm2tOTQW6AdMiyl5eDcpfVI538c');