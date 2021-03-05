module.exports = {
    execute(msg, _, __, embed, ____, _____) { 
      embed
      .setThumbnail(msg.guild.iconURL())
      .setColor('#0099ff')
      .setTitle(`Server information | ${msg.guild.name}`)
      .setDescription(`This servers member count is: ${"`"+msg.guild.memberCount+"`"}\nThis servers verification level is: ${"`"+msg.guild.verificationLevel+"`"}\nThis servers creation date is: ${"`"+msg.guild.createdAt+"`"}\nThe current owner of this server is: ${"<@!"+msg.guild.owner.id+">"}\nThis servers region is: ${"`"+msg.guild.region+"`"}`);
      msg.channel.send(embed);
    }
}