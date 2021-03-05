module.exports = {
    execute(msg, l, __, ___, ____, _____) {
      msg.channel.send(msg.content.substr(3 + l).replace(/l/g, "w").replace(/r/g, "w").replace(/@/g,"you thought"))
    }
}