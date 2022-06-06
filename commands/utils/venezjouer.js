const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "venezjouer",
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'poll [question]',
  examples: ['poll', 'poll Quelle heure est-il?'],
  description: "Proposer un jeu pour les petits potes!",
  async run(client, message, args) {
    if (!args[0]) return message.reply("Merci d'entrer une question pour votre sondage!");

    const embed = new MessageEmbed()
      .setTitle('Sondage')
      .setColor('#00a3b5')
      .setDescription(args.slice(0).join(' '))
      .setTimestamp()
      .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}!` });

    const poll = await message.reply({ embeds: [embed] });
    poll.react('<:Valide:981276161365655572>');
    poll.react('<:Refuse:981276161101426709>');
  },
  options: [
    {
      name: "title",
      description: "Taper le titre de l'embed",
      type: "STRING",
      required: true,
    },
    {
      name: "content",
      description: "Veuillez cité le jeu et l'heure ici.",
      type: "STRING",
      required: true,
    }
  ],
  async runInteraction(client, interaction) {
    const pollTitle = interaction.options.getString('title');
    const pollContent = interaction.options.getString('content');

    const embed = new MessageEmbed()
      .setTitle(pollTitle)
      .setColor('#00a3b5')
      .setDescription(pollContent)
      .setTimestamp()
      .setFooter({ text: `Nouvelle proposition de jeux par ${interaction.user.tag}!` });

    const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
    poll.react('☑');
    poll.react('✖');
  },
};
