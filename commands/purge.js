module.exports = {
    execute(msg) {
        if (msg.member.hasPermission("KICK_MEMBERS")) {
           msg.channel.bulkDelete(Number(msg.content.split(" ")[1]), false)
           msg.reply(`I've purged ${msg.content.split(" ")[1]} messages in this channel.`);
        }
    }
}
