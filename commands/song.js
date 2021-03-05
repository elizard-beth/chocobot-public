module.exports = {
    execute(msg, l, __, ___, arrays, _____) {
      let GoodMusic = arrays["GoodMusic"];
      if (GoodMusic[msg.content.substr(5 + l)]) {
        msg.channel.send(GoodMusic[msg.content.substr(5 + l)]);
      }
      else {
        msg.channel.send("I could not find music for this year");
      }
    }
}