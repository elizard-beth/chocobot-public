module.exports = {
    execute(msg, _, __, ___, arrays, _____) {
      let Nekopara = arrays["Nekopara"];
      msg.channel.send(Nekopara[Math.floor(Math.random() * Nekopara.length)]);
    }
}