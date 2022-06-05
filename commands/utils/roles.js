const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const selectMenu = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
      .setCustomId('roles-menu')
      .setPlaceholder('Choisir un rôle dans la liste')
      .setMinValues(1)
      .setMaxValues(3)
      .addOptions([
        {
          label: 'Vert',
          description: 'Choisir la couleur verte',
          value: '949385713907036300'
        },
        {
          label: 'Rouge',
          description: 'Choisir la couleur rouge',
          value: '949385761852104754'
        },
        {
          label: 'Orange',
          description: 'Choisir la couleur orange',
          value: '949390524605947934'
        }
      ])
  )

module.exports = {
  name: "roles",
  category: 'utils',
  permissions: ['SEND_MESSAGES', 'ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'roles',
  examples: ['roles'],
  description: "roles",
  async run(client, message, args) {
    await message.channel.send({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
  },
};
