const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const chatgpt = require('./chatgpt')

require('dotenv').config()
const TOKEN = process.env.TOKEN

//const wait = require('node:timers/promises').setTimeout;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // if (interaction.commandName === 'ping') {
    //     await interaction.deferReply();
    //     await wait(4000);
    //     await interaction.editReply('Pong!');
    // }

    if(interaction.commandName === 'chat'){
        let ask = interaction.options._hoistedOptions[0].value;
        //console.log(ask)

        await interaction.deferReply();
        //await interaction.editReply('Pong!');
        let resp = await chatgpt(ask)
        let m = `**You:** ${ask}\n**ChatGPT:** ${resp.trim()}`
        await interaction.editReply(m);
    }
});

client.login(TOKEN);