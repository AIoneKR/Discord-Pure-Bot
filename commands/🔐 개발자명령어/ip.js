const Discord = require("discord.js");

module.exports = {
    name: "ip",
    category: "🔐 개발자명령어",
    description: "봇으로 말을 할수있습니다.",
	usage: "<>",
    run: async (client, message, args) => {
        if (message.author.id == process.env.dvr) {
        
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /ip 사용`)
			} else {
		message.react('692644452401020958')
		let embed = new Discord.MessageEmbed()
		embed.setColor(0xff0d10)
		embed.setTitle(`Developer Permission ERROR!`)
		embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
		embed.setTimestamp()
		embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
}
    }
}