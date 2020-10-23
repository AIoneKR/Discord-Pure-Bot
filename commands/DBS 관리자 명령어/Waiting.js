const Discord = require("discord.js");

module.exports = {
    name: "인증대기",
    category: "DBS 관리자 명령어",
    description: "DBS전용 명령어.",
	usage: "<User ID (Bot ID)>",
    run: async (client, message, args) => {
	if (message.author.id === process.env.dvr || message.author.id === process.env.dvr2) {
	let user = client.users.cache.get(args[0]);
	let bot = client.users.cache.get(args[1]);
	if (!user) {
		return message.channel.send("Use : (prefix)인증대기 <User ID (Bot ID)>")
	}
	if (!bot) {
		return message.channel.send("Use : (prefix)인증대기 <User ID (Bot ID)>")
	}
	const embed = new Discord.MessageEmbed()
	embed.setColor("#ffff68")
    embed.setDescription("인증대기")
	embed.addField("Developer", user.toString(), true)
	embed.addField("Bot", bot.toString(), true)
	message.channel.send(embed)
	const logembed = new Discord.MessageEmbed()
	logembed.setColor("#ffff68")
    logembed.setDescription("인증대기")
	logembed.addField("Bot", `${bot.tag} (${bot.toString()})`, true)
	logembed.addField("Moderator", message.author.toString(), true)
	logembed.addField("Developer", user.toString())
	client.channels.cache.get("710530754072805404").send(logembed)
	client.users.cache.get(`${user.id}`).send(`${bot.toString()} 봇이 추가되었으며 이제 승인 대기 중입니다. 기다려주십시오...`)
    console.log(`> ${message.guild.name} < ${message.author.tag} > ${user.tag} (${message.author.id}) /인증대기 사용 > ${user.tag} > ${bot.tag}`)
    } else {
		message.channel.send("접 근 거 부")
	}
	}
}