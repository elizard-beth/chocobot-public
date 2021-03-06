const coms = {
  "ping":"Gets the bots current ping\n**Known bugs:**\nThere can be errors in which it returns a negative value, or the wrong value\n**Requirements**:\nNo permissions required to run this command",
  "kick":"Kicks the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nKick users permission required",
  "ban":"Bans the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nBan users permission required",
  "uptime":"Gets the bots current uptime\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nThere are no permissions required to run this command",
  "ship":"Ships 2 characters\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nThere are no permissions required to run this command",
  "avatar":"Gets the avatar of the first mentioned user in the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions required to run this command",
  "song":"Gets a good song from the year of the first argument of the message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "invite":"Gets the invite link for the bot\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "owo":"Owo-ifies your message\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "latest":"Gets information on the latest version\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "support":"Gets the invite link to the support server\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "math":"Evaluates your message as math\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "logs":"Changes the logs channel to the first parameter\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nKick members permission required",
  "prefix":"Changes this servers prefix to the first parameter\n**Known bugs:**\nYou can set `_ _` as the prefix and it confuses people\n**Requirements**:\nKick members permission required",
  "serverinfo":"Gets information on this server\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "splatoon":"Gets a random splatoon image\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "github":"Gets the bots github\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "thecat":"cat the",
  "poop":"poop fart (super secret hiddedn command)",
  "nekopara":"Gets a random nekopara gif\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "question":"Asks the bot a yes or no question\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "neko":"Generates a random sentence based off of a based vocabulary\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "rate":"Rates something out of 10\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "8ball":"Gets an 8ball response for something\n**Known bugs:**\nThere is currently 0 known bugs associated with this command\n**Requirements**:\nNo permissions are required to run this command",
  "userinfo":"Gets information on a user\n**Known bugs:**\nOutputting an empty embed\n**Requirements**:\nNo permissions are required to run this command"
};

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
            embed
              .setThumbnail()
              .setColor('#0099ff')
              .setTitle(msg.content.substr(4 + l, 5 + l).replace(/[abcdefghijklmnopqrstuvwxyz]/i, /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/) + msg.content.substr(5 + l))
              .setDescription(`**Description:**\n${coms[msg.content.substr(4 + l).replace(/ /g, "")] || "I couldn't find this command."}`);
            msg.channel.send(embed);
        }
    }
}
