const math = require('mathjs');

module.exports = {
    execute(msg, length) {
        try { 
           msg.channel.send(math.evaluate(msg.content.substr(5 + length)));
        }
        catch (mathError) {
           msg.channel.send(`Evaluation error: ${mathError || "Unknown"}`);
        }
    }
}