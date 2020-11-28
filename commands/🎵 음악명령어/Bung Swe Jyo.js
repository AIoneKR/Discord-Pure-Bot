const Discord = require("discord.js");

module.exports = {
    name: "봉쉐",
    category: "🎵 음악명령어",
    description: "봉쉐를 합니다.\n(빢치쥬?)\n[당신은 이스터에그를 발견하였습니다.\n개발자에게 알려주신다면 프리미엄(실버)를 드리겠습니다.]",
    run: async (client, message) => {
	const msg = await message.channel.send(".");
	
	const user = message;

	const embed = new Discord.MessageEmbed()
     .setColor("#00ff05")
     .setTitle(`Voice Bung Swe Jyo SiJag`)
	.setDescription("봉쉐를 시작합니다!")
     .addField("**이름**", `**${user.author.tag}**`)
	.addField("**ID**", `**${user.author.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	msg.edit(embed)
	msg.edit("")
     user.member.voice.setMute(true)
     user.member.voice.setDeaf(true)
	setTimeout(() => { 
     user.member.voice.setMute(false)
     user.member.voice.setDeaf(false) }, 1000)
	setTimeout(() => { 
     user.member.voice.setMute(true)
     user.member.voice.setDeaf(true) }, 2000)
	setTimeout(() => { 
     user.member.voice.setMute(false)
     user.member.voice.setDeaf(false) }, 3000)
	setTimeout(() => { 
     user.member.voice.setMute(true)
     user.member.voice.setDeaf(true) }, 4000)
	const embed1 = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setTitle(`Voice Bung Swe Jyo Kkeut`)
	.setDescription("봉쉐가 끝났습니다!")
     .addField("**이름**", `**${user.author.tag}**`)
	.addField("**ID**", `**${user.author.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	setTimeout(() => { 
	msg.edit(embed1)
	msg.edit("")
     user.member.voice.setMute(false)
     user.member.voice.setDeaf(false) }, 5000)
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /봉쉐 사용`)
    }
}