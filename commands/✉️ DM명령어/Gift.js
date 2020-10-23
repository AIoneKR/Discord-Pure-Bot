const Discord = require("discord.js");

module.exports = {
    name: "문상",
    category: "✉️ DM명령어",
    description: "후원을 할수있습니다.",
	usage: "문상 <문상PIN번호>",
    run: async (client, message) => {
	message.channel.send(`접두사 없이 **DM으로** "문상 (PIN)"을 입력하시면됩니다.`)
    }
}