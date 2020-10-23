const Discord = require("discord.js");

module.exports = {
    name: "안녕",
    category: "📡 자동대답",
    description: "안녕",
    run: async (client, message, args) => {
	message.reply("님 안녕하세요!")
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /안녕 사용`)
}
}