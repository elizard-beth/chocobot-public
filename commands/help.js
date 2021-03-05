module.exports = {
    execute(msg, l, prefix, embed) {
        if (msg.content === `${prefix}help`) {
          embed
          .setThumbnail()
          .setColor('#0099ff')
          .setTitle('List of current commands')
          .setDescription(`1. ${prefix}ping [no arguments] | 2. ${prefix}kick [mention] \n3. ${prefix}ban [mention] | 4. ${prefix}uptime [no arguments]\n5. ${prefix}avatar [user] | 6. ${prefix}song [year] _            _ \n7. ${prefix}invite [no arguments] | 8. ${prefix}owo [message] \n9. ${prefix}latest [no arguments] | 10. ${prefix}support [no arguments]\n11. ${prefix}math [to evaluate] | 12. ${prefix}logs [channelId or 0 to disable] \n13. ${prefix}prefix [no arguments] | 14. ${prefix}serverinfo [no arguments]\n15. ${prefix}splatoon [no arguments] | 16. ${prefix}thecat\n17. ${prefix}nekopara [no arguments] | 18. ${prefix}question [question]\n19. ${prefix}invite [no arguments] | 20. ${prefix}neko [no arguments]\n 21. ${prefix}rate [thing] | 22. ${prefix}8ball [thing]\n23. ${prefix}ship [name], [name2] | 24. ${prefix}userinfo [mention]\n25. ${prefix}github [no arguments]`);
          msg.channel.send(embed);
        }
        else {
            // why
            
            if (msg.content.substr(5 + l) == "ping") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Ping command')
                .setDescription('**Description:**\nGets the bots current ping\n**Known bugs:**\nThere can be errors in which it returns a negative value, or the wrong value\n**Requirements**:\nNo permissions required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "kick") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Kick command')
                .setDescription('**Description:**\nKicks the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nKick users permission required');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "ban") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Ban command')
                .setDescription('**Description:**\nBans the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nBan users permission required');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "uptime") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Uptime command')
                .setDescription('**Description:**\nGets the bots current uptime\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nThere are no permissions required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "ship") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Ship command')
                .setDescription('**Description:**\nShips 2 characters\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nThere are no permissions required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "avatar") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Avatar command')
                .setDescription('**Description:**\nGets the avatar of the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "song") {
                embed
                .setColo
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Song command')
                .setDescription('**Description:**\nGets a good song from the year of the first argument of the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "invite") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Invite command')
                .setDescription('**Description:**\nGets the invite link for the bot\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "owo") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Owo command')
                .setDescription('**Description:**\nOwo-ifies your message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "latest") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Latest command')
                .setDescription('**Description:**\nGets information on the latest version\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "support") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Support command')
                .setDescription('**Description:**\nGets the invite link to the support server\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "math") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Math command')
                .setDescription('**Description:**\nEvaluates your message as math\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "logs") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Logs command')
                .setDescription('**Description:**\nChanges the logs channel to the first parameter\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nKick members permission required');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "prefix") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Prefix command')
                .setDescription('**Description:**\nChanges this servers prefix to the first parameter\n**Known bugs:**\nYou can set `_ _` as the prefix and it confuses people\n**Requirements**:\nKick members permission required');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "serverinfo") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Serverinfo command')
                .setDescription('**Description:**\nGets information on this server\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "splatoon") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Splatoon command')
                .setDescription('**Description:**\nGets a random splatoon image\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "github") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Github command')
                .setDescription('**Description:**\nGets the bots github\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "thecat") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('cat the')
                .setDescription('the cat');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "poop") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('hidden poop command')
                .setDescription('poop fart');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "nekopara") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Nekopara command')
                .setDescription('**Description:**\nGets a random nekopara gif\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "question") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Question command')
                .setDescription('**Description:**\nAsks the bot a yes or no question\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "neko") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Neko command')
                .setDescription('**Description:**\nGenerates a random kawaii neko baby sentence\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "rate") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('Rate command')
                .setDescription('**Description:**\nRates something out of 10\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "8ball") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('8ball command')
                .setDescription('**Description:**\nGets an 8ball response for something\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
              else if (msg.content.substr(5 + l) == "userinfo") {
                embed
                .setThumbnail()
                .setColor('#0099ff')
                .setTitle('UserInfo command')
                .setDescription('**Description:**\nGets information on a user\n**Known bugs:**\nOutputting an empty embed\n**Requirements**:\nNo permissions are required to run this command');
                msg.channel.send(embed)
              }
        }
    }
}
