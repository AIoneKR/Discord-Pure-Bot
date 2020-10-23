const Discord = require("discord.js");
const dev = [process.env.dvr, "690504046905393182"]

module.exports = {
    name: "인증성공",
    category: "DBS 관리자 명령어",
    description: "DBS전용 명령어.",
	usage: "<User ID (Bot ID)>",
    run: async (client, message, args) => {
	if (message.author.id === process.env.dvr || message.author.id === process.env.dvr2) {
	let userroles = message.guild.member(client.users.cache.get(args[0]));
	let botroles = message.guild.member(client.users.cache.get(args[1]));
	let user = client.users.cache.get(args[0]);
	let bot = client.users.cache.get(args[1]);
	if (!user) {
		return message.channel.send("Use : (prefix)인증성공 <User ID (Bot ID)>")
	}
	if (!bot) {
		return message.channel.send("Use : (prefix)인증성공 <User ID (Bot ID)>")
	}
	userroles.roles.add("687193597459955743")
	botroles.roles.add("687181994635034648")
	const embed = new Discord.MessageEmbed()
	embed.setColor("#4aa9ff")
    embed.setDescription("인증성공")
	embed.addField("Developer", user.toString(), true)
	embed.addField("Bot", bot.toString(), true)
	message.channel.send(embed)
	const logembed = new Discord.MessageEmbed()
	logembed.setColor("#4aa9ff")
    logembed.setDescription("인증성공")
	logembed.addField("Bot", `${bot.tag} (${bot.toString()})`, true)
	logembed.addField("Moderator", message.author.toString(), true)
	logembed.addField("Developer", user.toString())
	client.channels.cache.get("710530754072805404").send(logembed)
	client.users.cache.get(`${user.id}`).send(`${bot.toString()} 봇이 승인되었습니다! 🎉`)
    console.log(`> ${message.guild.name} < ${message.author.tag} > ${user.tag} (${message.author.id}) /인증성공 사용 > ${user.tag} > ${bot.tag}`)
    } else {
		message.channel.send("접 근 거 부")
	}
	}
}