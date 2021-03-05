module.exports = {
    execute(msg, _, __, embed, ____, client) { 
      if (!(Number(msg.content.split(" ")[1])) && msg.mentions.members.first()) {
        try{
          embed
           .setColor('#0099ff')
           .setTitle((msg.mentions.members.first().user.tag) + "'s avatar:")
           .setImage(msg.mentions.members.first().user.avatarURL().replace(/webp/,"png") + "?size=512");
           msg.channel.send(embed);
        }
        catch {}
      }
      else {
        try {
         async function a() {
            let user = await client.users.fetch(msg.content.split(" ")[1] || msg.author.id);
            embed
             .setColor('#0099ff')
             .setTitle((user.tag) + "'s avatar:")
             .setImage(user.avatarURL().replace("webp","png") + "?size=512");
            msg.channel.send(embed)
          } 
          a();
         }  
         catch {}
      }
    }
} 
