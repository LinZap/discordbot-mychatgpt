const { REST, Routes, SlashCommandBuilder } = require('discord.js');


require('dotenv').config()
const TOKEN = process.env.TOKEN
const CLIENT_ID = process.env.CLIENT_ID


const data = new SlashCommandBuilder()
	.setName('chat')
	.setDescription('Chat with ChatGPT!')
	.addStringOption(option =>
		option.setName('message')
			.setDescription('type something...')
			.setRequired(true));


const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: [data] });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();