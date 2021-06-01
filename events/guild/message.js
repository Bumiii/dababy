module.exports = (Discord, client, message) => {
    
    const prefix = "da";
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, cmd, args, Discord);

    var facts = ['yea yea', 'i pull up', 'https://youtu.be/U2JyeciEwSI', 'huh', 'https://youtu.be/KvuQNNVrbtM', 'less go', "less go", "yea yea", "i pull up", "huh"]
    var fact = Math.floor(Math.random() * facts.length)
    const channel = client.channels.cache.get('836677806599176206')
    channel.send(`${facts[fact]}`);
    console.log(facts[fact]);
}