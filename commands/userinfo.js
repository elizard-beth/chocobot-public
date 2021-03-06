module.exports = {
    execute(msg, _, __, embed, ____, _____) { 
      try{if (msg.mentions.members.first().user.lastMessage) {
        embed
        .setThumbnail(msg.mentions.members.first().user.avatarURL())
        .setColor('#0099ff')
        .setTitle(`User Information | ${msg.mentions.members.first().user.username}`)
        .setDescription(`This user joined Discord on: ${"`"+msg.mentions.members.first().user.createdAt+"`"}\nThis users id is: ${"`"+msg.mentions.members.first().user.id + "`"}\nThis users last message was on: ${"`"+(msg.mentions.members.first().user.lastMessage.createdAt)+"`"}`);
        console.log(toString(...msg.mentions.members.first().roles))
      }
      else {
        embed
        .setThumbnail(msg.mentions.members.first().user.avatarURL())
        .setColor('#0099ff')
        .setTitle(`User Information | ${msg.mentions.members.first().user.username}`)
        .setDescription(`This user joined Discord on: ${"`"+msg.mentions.members.first().user.createdAt+"`"}\nThis users id is: ${"`"+msg.mentions.members.first().user.id + "`"}\nThis users last message was on: ${"`" + "This information could not be found" + "`"}`);
      }}catch{
        embed
        .setThumbnail(msg.author.avatarURL())
        .setColor('#0099ff')
        .setTitle(`User Information | ${msg.author.username}`)
        .setDescription(`This user joined Discord on: ${"`"+msg.author.createdAt+"`"}\nThis users id is: ${"`"+msg.author.id + "`"}\nThis users last message was on: ${"`"+(msg.author.lastMessage.createdAt)+"`"}`);
      }
      msg.channel.send(embed)
    }
}
