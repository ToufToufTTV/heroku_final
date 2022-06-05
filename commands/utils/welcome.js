const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('accept-button')
      .setLabel('Accepter')
      .setStyle('SUCCESS'),

    new MessageButton()
      .setCustomId('refuse-button')
      .setLabel('Refuser')
      .setStyle('DANGER')
  )

const welcomeEmbed = new MessageEmbed()
  .setTitle('Charte du serveur')
  .setDescription("Merci d'être gentil et puis c'est tout. Respecte ton maitre qui est LaSainteTouf aka Touf aka ToufToufTTV aka ToufTouf aka qui tu veux mais respecte moi sinon pas cool.")
  .setFooter({ text: 'Bienvenue sur le serveur' })
  .setColor("#0026ff")
  .setTimestamp()

module.exports = {
  name: "welcome",
  category: 'utils',
  permissions: ['SEND_MESSAGES', 'ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'welcome',
  examples: ['welcome'],
  description: "La commande welcome permet d'envoyer l'embed des règles",
  async run(client, message, args) {
    await message.channel.send({ embeds: [welcomeEmbed], components: [buttons] });
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
  },
};
