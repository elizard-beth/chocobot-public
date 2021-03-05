module.exports = {
    execute(msg, _, __, ___, ____, _____) { 
      if (Math.floor(Math.random() * 2) == 1) {
        msg.channel.send("ya");
      } 
      else {
        msg.channel.send("nah");
      }
    }
}