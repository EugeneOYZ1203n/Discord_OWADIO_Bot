console.log("Hi");

const { Client, IntentsBitField } = require('discord.js');
const TOKEN = 'MTEwMDY2MzUzNDU2MTUzMzk2Mg.GkQlA7.Jhx4CY6dOWAh2y0DKl7H8yH8ciIdV4ibvKFhIs';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.login(TOKEN);

