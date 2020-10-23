const Discord = require('discord.js')

module.exports = {
    name: "docs",
	aliases: ["djs"],
    category: "🔍 검색명령어",
    description: "discord.js",
	usage: "<Text>",
    run: async (client, message, args) => {

    const query = args.join(' ')
    if (!query) return message.channel.send(`${this.client.utils.constructors.EMOJI_NO} Query is not exsit. please enter a query!`)

    const getFetch = await require('node-fetch')(`https://djsdocs.sorta.moe/v2/embed?src=https://raw.githubusercontent.com/discordjs/discord.js/docs/stable.json&q=${encodeURI(query)}`).then(res => res.json())
    try {
      const docsEmbed = new Discord.MessageEmbed(getFetch)
      message.channel.send(docsEmbed)
	  console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /docs 사용 > ${query}`)
    } catch (e) {
      const docsError = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('ERROR!')
        .setDescription(e)
      message.channel.send(docsError)
    }
  }
}