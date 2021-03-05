module.exports = {
    execute(msg, _, __, ___, arrays, ______) {
        let SplatImages = arrays["SplatImages"]
        msg.channel.send(SplatImages[Math.floor(Math.random() * SplatImages.length)])
    }
}