module.exports = {
    execute(msg) {
        return msg.channel.send(`Current ping: ${'`' + (msg.createdAt - Date.now()) / 10 + 'ms`'}`);
    }
}