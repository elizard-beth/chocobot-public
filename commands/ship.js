module.exports = {
    execute(msg, _, __, ___, arrays, _____) {
      let rating = arrays["rating"]
      let shipa = msg.content.substr(msg.content.search(" "), msg.content.search(",") - 5);
      let shipb = msg.content.substr(msg.content.search(",") + 1);

      msg.channel.send(`${shipa} x ${shipb} (${shipa.substr(0,4) + shipb.substr(shipb.length - 4)}):\n${rating[Math.floor(Math.random() * 10)]} :sparkling_heart: `);
    }
}