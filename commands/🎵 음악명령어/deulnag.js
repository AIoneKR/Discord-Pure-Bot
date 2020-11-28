const Discord = require("discord.js");

module.exports = {
    name: "들낙",
    category: "🎵 음악명령어",
    description: "음성채널에서 들낙합니다.",
    run: async (client, message, args) => {
	if (message.member.voice.channel) {
		
	const msg = await message.channel.send(".");
	
	const embed = new Discord.MessageEmbed()
     .setColor("#00ff05")
     .setTitle(`Voice Deu Lnag SiJag`)
	.setDescription("음성채널에서 들낙을 시작합니다!")
     .addField("**채널 이름**", `**${message.member.voice.channel.name}**`)
	.addField("**채널 ID**", `**${message.member.voice.channel.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	msg.edit(embed)
	msg.edit("")
     message.member.voice.channel.join();
	setTimeout(() => { 
	message.member.voice.channel.leave() }, 1000)
	setTimeout(() => { 
	message.member.voice.channel.join() }, 2000)
	setTimeout(() => { 
	message.member.voice.channel.leave() }, 3000)
	setTimeout(() => { 
	message.member.voice.channel.join() }, 4000)
	const embed1 = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setTitle(`Voice Deu Lnag Kkeut`)
	.setDescription("음성채널에서 들낙이 끝났습니다!")
     .addField("**채널 이름**", `**${message.member.voice.channel.name}**`)
	.addField("**채널 ID**", `**${message.member.voice.channel.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	setTimeout(() => { 
	msg.edit(embed1)
	msg.edit("")
	message.member.voice.channel.leave() }, 5000)
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /들낙 사용`)
    } else {
     message.reply('음성채널에 입장해주세요!');
    }
    }
}