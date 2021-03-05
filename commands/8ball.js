module.exports = {
    execute(msg, _, __, ___, arrays, _____) {
      let outcomes = arrays["outcomes"];
      msg.channel.send(outcomes[Math.floor(Math.random() * outcomes.length)]);
    }
}
