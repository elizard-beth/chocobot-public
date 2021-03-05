module.exports = {
    execute(msg, _, __, ___, arrays, _____) {
      let rating = arrays["rating"]
      msg.channel.send(rating[Math.floor(Math.random() * 10)]);
    }
}