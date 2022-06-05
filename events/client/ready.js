const Logger = require('../../utils/Logger');

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    let guildsCount = await client.guilds.fetch();
    let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    Logger.client(`- prêt à être utilisé par ${usersCount} utilisateurs sur ${guildsCount.size} serveurs!`);

    client.user.setPresence({ activities: [{ name: 'avec les petits potes', type: 'PLAYING' }], status: 'dnd' });

    const devGuild = await client.guilds.cache.get('771777818790199360');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
};
