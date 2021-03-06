module.exports = {
    execute(msg, _, __, ___, ____, client) {
        if (client.uptime / 60000 < 60) {
            msg.channel.send(Math.floor(client.uptime / 60000) + " minutes.");
        }
        else if (client.uptime / 600000 < 60) {
            msg.channel.send(Math.floor(client.uptime / 600000) + " hours.");
        }
        else if (client.uptime / 600000 / 24 > 1) {
            msg.channel.send(Math.floor(client.uptime / 600000 / 24) + " days.");
        }

    }
}
