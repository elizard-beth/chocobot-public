module.exports = {
  execute(msg, _, __, embed) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
    try{
      msg.guild.fetchBans().then(banned=>{
         embed
            .setThumbnail()
            .setColor('#0099ff')
            .setTitle('USER | UBBANNED')
            .setDescription("`Unbanned: \nid: " + msg.content.split(" ")[1] + "`\n");
            fs.readFile('users.json', 'utf8', function(err, data){ 
               try { client.channels.cache.get(JSON.parse(data)[msg.guild.id]["logs"]).send(embed); } catch { }
            })  
        msg.guild.members.unban(banned.find(Number(msg.content.split(" ")[1])))
        msg.channel.send("This person is unbanned :blush:!")
      })
    }
    catch(e){
      msg.channel.send("I could not unban this person.");
      console.log(e);
    }
  } 
  }
}
