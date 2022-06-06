module.exports = {
  name: "emoji",
  category: 'utils',
  permissions: ['SEND_MESSAGES', 'ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'emoji [question]',
  examples: ['emoji'],
  description: "Poster vos emojis!",
  async run(client, message, args) {
    // 🟥 🟩 🟦
    const poll = await message.reply('Emoji');
    await poll.react('🟥');
    await poll.react('🟩');
    await poll.react('🟦');
  },
  async runInteraction(client, interaction) {
    const poll = await interaction.reply({ content: 'Emoji', fetchReply: true });
    await poll.react('🟥');
    await poll.react('🟩');
    await poll.react('🟦');
          // <:__:981276161101426709> <:__:981276161365655572>
    await poll.react('💌');
  }
};
