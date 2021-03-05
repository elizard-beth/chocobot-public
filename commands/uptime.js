module.exports = {
    execute(msg, _, __, ___, ____, client) {
        msg.channel.send(Math.floor(client.uptime / 60000) + " minutes.");
    }
}