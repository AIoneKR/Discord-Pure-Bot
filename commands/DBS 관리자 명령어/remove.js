const Discord = require("discord.js");
const dev = [process.env.dvr, "690504046905393182"]

module.exports = {
    name: "인증제거",
    category: "DBS 관리자 명령어",
    description: "DBS전용 명령어.",
	usage: "<User ID (Bot ID)>",
    run: async (client, message, args) => {
	if (message.author.id === process.env.dvr || message.author.id === process.env.dvr2) {
	let userroles = message.guild.member(client.users.cache.get(args[0]));
	let user = client.users.cache.get(args[0]);
	let bot = client.users.cache.get(args[1]);
	let rere = message.content.split(" ").slice(3);
    var reew = rere.join(" ");
	if (!user) {
		return message.channel.send("Use : (prefix)인증제거 <User ID (Bot ID)> (이유)")
	}
	if (!bot) {
		return message.channel.send("Use : (prefix)인증제거 <User ID (Bot ID)> (이유)")
	}
	const member = message.guild.member(bot);
	member.kick("인증제거에 의해 추방")
	userroles.roles.remove("687193597459955743")
	const embed = new Discord.MessageEmbed()
	embed.setColor("#ff4f4f")
    embed.setDescription("인증제거")
	embed.addField("Developer", user.toString(), true)
	embed.addField("Bot", bot.toString(), true)
	message.channel.send(embed)
	const logembed = new Discord.MessageEmbed()
	logembed.setColor("#ff4f4f")
    logembed.setDescription("인증제거")
	logembed.addField("Bot", `${bot.tag} (${bot.toString()})`, true)
	logembed.addField("Moderator", message.author.toString(), true)
	logembed.addField("Developer", user.toString())
	logembed.addField("Reason", reew || '이유없음')
	client.channels.cache.get("710530754072805404").send(logembed)
	client.users.cache.get(`${user.id}`).send(`${bot.toString()} 봇이 삭제되었습니다. 이유 : ${reew || '이유없음'}`)
    console.log(`> ${message.guild.name} < ${message.author.tag} > ${user.tag} (${message.author.id}) /인증제거 사용 > ${user.tag} > ${bot.tag}`)
    } else {
		message.channel.send("접 근 거 부")
	}
	}
}