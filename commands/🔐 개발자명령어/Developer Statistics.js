const Discord = require("discord.js");

module.exports = {
    name: "개발자통계",
    category: "🔐 개발자명령어",
    description: "통계를 보여줍니다.",
    run: async (client, message, args) => {
		

		const dev_ids = ["379775547838038028"];

		var allowedToUse = false;
		dev_ids.forEach(id => {
			if(message.author.id == id)
				allowedToUse = true;
		});
		if(allowedToUse) {

		let emojil = client.emojis.cache.get("691681971478462495")//로딩바
		
	let embed = new Discord.MessageEmbed()
	.setColor(0x268f75)
	.setTitle("Pure 통계")
	.setDescription(`서버 : ${client.guilds.cache.size}\n사용자 : ${client.users.cache.size}` + "\n\n" + ` > **${client.guilds.cache.map(r => r).join("\n > ")}**`)
	.setTimestamp()
	.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.author.send({embed})
	message.react('692644452220534857')
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /통계 사용`)
	} else {
		message.react('692644452401020958')
		embed.setColor(0xff0d10)
		embed.setTitle(`Developer Permission ERROR!`)
		embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
		embed.setTimestamp()
		embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
}
}
}