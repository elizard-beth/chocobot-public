module.exports = {
    execute(msg) { 
      if (Math.floor(Math.random() * 2) == 1) {
        msg.channel.send("ya");
      } 
      else {
        msg.channel.send("nah");
      }
    }
}
