module.exports = {
    execute(msg, length, _, __, ___, ____, math) {
        try { 
           msg.channel.send(math.evaluate(msg.content.substr(5 + length)));
        }
        catch (mathError) {
           msg.channel.send(`Evaluation error: ${mathError || "Unknown"}`);
        }
    }
}
