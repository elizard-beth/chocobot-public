const Discord = require('discord.js');
const fs = require("fs"); 
const client = new Discord.Client();
let embed = new Discord.MessageEmbed();


let logs;
fs.readFile('users.json', 'utf8', function(_, data){ 
  logs = JSON.parse(data) 
});

let arrays;
fs.readFile('arrays.json', 'utf8', function(_, data){ 
   arrays = JSON.parse(data);
});

client.on('ready', () => {
  client.status
  console.log((`Logged in as ${client.user.tag}`));
  client.user.setPresence({activity: {name: `;help | v2.5.6`,}});
});


client.on("messageUpdate", msg => {
  if(msg.author.id !== "767264117463187466") {
    embed
    .setImage()
    .setThumbnail()
      .setColor('#0099ff')
      .setTitle('MESSAGE | EDITED')
      .setDescription("Link: https://discord.com/channels/" + msg.guild.id + "/" + msg.channel.id + "/" + msg.id + "\n\nWas originally: `" + msg.content + "`\nCreated by:\nUsername: " + msg.author.username + "#" + msg.author.discriminator + " ID: " + msg.author.id + "\n")
    fs.readFile('users.json', 'utf8', function(err, data){ 
      try { client.channels.cache.get(JSON.parse(data)[msg.guild.id]["logs"]).send(embed);  } catch { }
    })
  }
})


client.on("messageDelete", msg => {
  embed
  .setImage()
  .setThumbnail()
    .setColor('#0099ff')
    .setTitle('MESSAGE | DELETED')
    .setDescription("Link: https://discord.com/channels/" + msg.guild.id + "/" + msg.channel.id + "/" + msg.id + "\n\nWas originally: `" + msg.content + "`\nCreated by:\nUsername: " + msg.author.username + "#" + msg.author.discriminator + " ID: " + msg.author.id + "\n")
  fs.readFile('users.json', 'utf8', function(err, data){ 
    try { client.channels.cache.get(JSON.parse(data)[msg.guild.id]["logs"]).send(embed); } catch { }
  })  
})

client.on('message', msg => {  
  embed
  .setTitle("")
  .setDescription("") 
  .setImage();

  if (msg.guild && msg.author.id !== "767264117463187466") {
    if (!(logs[msg.guild.id])) {
      logs[msg.guild.id] = {}
      logs[msg.guild.id]["prefix"] = ";"
    } 

    // this is some much older code that i didn't bother to clean up
    if (msg.content.startsWith(logs[msg.guild.id]["prefix"] + "logs") && msg.member.hasPermission("KICK_MEMBERS")) {   
      if ((msg.guild.channels.cache.get(msg.content.substr(5+ logs[msg.guild.id]["prefix"].length)))){
      msg.react("😊");msg.react("👍");
      logs[msg.guild.id]["logs"] = msg.content.substr(5+ logs[msg.guild.id]["prefix"].length);
      fs.writeFile("users.json", JSON.stringify(logs), err => { 
        if (err) throw err;
      }); }
      else {
        msg.react("😔");
      }
    }
  
    else if (msg.content.startsWith(logs[msg.guild.id]["prefix"] + "prefix") && msg.member.hasPermission("KICK_MEMBERS")) {    
      if (msg.content.split(" ")[1] !== ""){
        logs[msg.guild.id]["prefix"] = msg2.split(" ")[1]
        msg.react("😊");msg.react("👍");
        fs.writeFile("users.json", JSON.stringify(logs), err => { 
          if (err) throw err;
        }); 
      } 
      else {
        msg.react("😔");
      }
    }
    // old code ends here
    else if (msg.content.startsWith(logs[msg.guild.id]["prefix"]) && msg.author.id !== "767264117463187466") {
      if (msg.content.search(" ") > 0) {
        try { 
          require(`./commands/${msg.content.substr(logs[msg.guild.id]["prefix"].length, msg.content.search(" ") - 1)}`)
          .execute(msg, logs[msg.guild.id]["prefix"].length, logs[msg.guild.id]["prefix"], embed, arrays, client);
        }
        catch (e) { 
          msg.channel.send(" I ran into some trouble running this command."); 
          console.log(e); 
        }
      }
    else {
        try { 
          require(`./commands/${msg.content.substr(logs[msg.guild.id]["prefix"].length)}`)
          .execute(msg, logs[msg.guild.id]["prefix"].length, logs[msg.guild.id]["prefix"], embed, arrays, client);
        }
        catch (e) { 
          msg.channel.send(" I ran into some trouble running this command."); 
          console.log(e); 
        }
      }
    }
  }
  else if (msg.author.id !== "767264117463187466"){
    msg.reply("I don't work in DMs!")
  }

});

client.login('no')
