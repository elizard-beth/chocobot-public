// what the fuck did i just write
const fs = require('fs')
module.exports = {
    execute(msg, _, __, ___, ____, client) {try{
        if (msg.member.hasPermission("BAN_MEMBERS") && client.hasPermission("BAN_MEMBERS")) {
            try {
                try{msg.mentions.members.first().ban();}catch{}
                embed
                 .setThumbnail()
                 .setColor('#0099ff')
                 .setTitle('USER | BANNED')
                 .setDescription("`Banned: " + msg.mentions.members.first().user.username + "#" + msg.mentions.members.first().user.discriminator + ", id: " + msg.mentions.members.first().id + "`\n");
                fs.readFile('users.json', 'utf8', function(err, data){ 
                 try { client.channels.cache.get(JSON.parse(data)[msg.guild.id]["logs"]).send(embed); } catch { }
                })  
              } catch {}
        }}catch{}
    }
}
