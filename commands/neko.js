const neko = ["are you a", "do you like", "kawaii", "neko", "baby", "neko", "yaaaay!!!", "miku","uwaaaaaaauuuuuu", "nyaaaaaa!~", "~", "=O=", ">O<", "nya"]

module.exports = {
    execute(msg, _, __, ___, ____, ______) {
        msg.reply( 
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)] + " " +
            neko[Math.floor(Math.random() * neko.length)]
        );
    }
}