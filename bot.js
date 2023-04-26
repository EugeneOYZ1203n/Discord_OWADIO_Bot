console.log("Hi");

require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.login(process.env.TOKEN);

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
})

client.on('interactionCreate', (interaction)=>{
    if (!interaction.isChatInputCommand()){
        return;
    }

    console.log('hey');

    if (interaction.commandName === 'hey'){
        interaction.reply('hey');
    }
})

client.on('messageCreate', (message) => {

    if (message.author.bot){
        return;
    }

    if (message.content === 'hello'){
        message.reply('hello');
    }

    console.log(message.content);
})



