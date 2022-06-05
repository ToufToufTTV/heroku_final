module.exports = {
  name: "accept-button",
  async runInteraction(client, interaction) {
    await interaction.member.roles.add('778158046550425610');
    await interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez maintenant accéder au serveur', ephemeral: true });
  }
};
