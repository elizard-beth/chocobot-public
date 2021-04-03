const Discord = require('discord.js');
const math = require('mathjs');
const fs = require("fs"); 
const client = new Discord.Client();
let embed = new Discord.MessageEmbed();
let logs;
let prefix;
let arrays;

fs.readFile('users.json', 'utf8', function(_, data){ 
  logs = JSON.parse(data) 
});
fs.readFile('arrays.json', 'utf8', function(_, data){ 
   arrays = JSON.parse(data);
});

client.on('ready', () => {
  client.status
  console.log((`Logged in as ${client.user.tag}`));
  client.user.setPresence({activity: {name: `;help | v2.5.8`,}});
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
    .setThumbnail()
    .setImage();

  if (msg.guild && msg.author.id !== "767264117463187466") {
    
    if (msg.channel.id === "817264760877613097" && msg.content !== "hi") { 
      msg.delete();
    }
    if (!(logs[msg.guild.id])) {
      logs[msg.guild.id] = {["prefix"]: ";"};
    } 

    let prefix =  logs[msg.guild.id]["prefix"];

    function requireCommand(command) {
      try { require(`./commands/${command}`)
      .execute(msg, prefix.length, prefix, embed, arrays, client, math); } catch  (e){ console.log(e); }
    }

    // this is some much older code that i didn't bother to clean up
    if (msg.content.startsWith(prefix + "logs") && msg.member.hasPermission("KICK_MEMBERS")) {   
      if (msg.guild.channels.cache.get(msg.content.split(" ")[1])) {
        msg.react("😊");
        msg.react("👍");
        logs[msg.guild.id]["logs"] = msg.content.split(" ")[1];
        fs.writeFile("users.json", JSON.stringify(logs), err => { 
         if (err) throw err;
        }); 
      }
      else {
        msg.react("😔");
      }
    }
  
    else if (msg.content.startsWith(prefix + "prefix") || msg.content.startsWith(";prefix") && msg.member.hasPermission("KICK_MEMBERS")) {    
      if (msg.content.split(" ")[1] !== "") {
        logs[msg.guild.id]["prefix"] = msg.content.split(" ")[1]
        msg.react("😊");
        msg.react("👍");
        fs.writeFile("users.json", JSON.stringify(logs), err => { 
          if (err) throw err;
        }); 
      } 
      else {
        msg.react("😔");
      }
    }
    // old code ends here
    else if (msg.content.startsWith(prefix) && msg.author.id !== "767264117463187466") {
      if (msg.content.search(" ") > 0) {
        try { requireCommand(msg.content.substr(prefix.length).split(" ")[0]); } catch {}
      }
      else {
        try { requireCommand(msg.content.substr(prefix.length)); } catch {}
      }
    }
  }
  else if (!msg.guild && !(msg.author.id !== "767264117463187466")) {
    msg.reply("I am not functional in DMs")
  }
});

client.login('no')
