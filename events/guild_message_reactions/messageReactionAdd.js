module.exports = {
  name: "messageReactionAdd",
  once: false,
  async execute(client, messageReaction, user) {
    // 🟥 🟩 🟦
    const message = messageReaction.message;
    const emojiName = messageReaction.emoji.name;
    const member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    if (messageReaction.partial) {
      try {
        await messageReaction.fetch();
      } catch (error) {
        console.log('Impossible de récupérer les messages!');
        return;
      }
    }

    if (emojiName === '🟥') message.delete();
    if (emojiName === '🟦') message.reactions.removeAll();
    // if (emojiName === '🟩') message.channel.send('Je suis le carré vert: 🟩!');
    if (emojiName === '🟩');
    if (emojiName === '✅') member.send("Tu as accepté le poll!");
    if (emojiName === '❌') member.send("Tu as refusé le poll!");
      // <:__:981276161101426709> <:__:981276161365655572> ☑✖ 💌
    if (emojiName === '☑') member.send("Tu as accepté de jouer avec les petits potes!");
    if (emojiName === '✖') member.send("Tu as refusé de jouer aveec les petits potes!");
    if (emojiName === '💌') member.send("Ceci est un rappel, LaSainteTouf domine le monde.");
  }
};
