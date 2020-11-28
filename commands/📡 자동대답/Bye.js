const Discord = require("discord.js");

module.exports = {
    name: "잘가",
    category: "📡 자동대답",
    description: "안녕",
    run: async (client, message, args) => {
	message.reply("님! 저는 갈수없어요!\n왜냐구요?\n||저는 여기에 계속 있어야 사람들을 도울수있어요!\n그러니 저는 갈수가 없겠죠?||")
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /안녕 사용`)
}
}