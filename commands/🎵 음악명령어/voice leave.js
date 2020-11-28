const Discord = require("discord.js");

module.exports = {
    name: "퇴장",
    category: "🎵 음악명령어",
    description: "음성채널을 나갑니다.",
    run: async (client, message, args) => {
	if (message.member.voice.channel) {
	const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setTitle(`Voice Leave`)
	.setDescription("음성채널에서 나갔습니다!")
     .addField("**채널 이름**", `**${message.member.voice.channel.name}**`)
	.addField("**채널 ID**", `**${message.member.voice.channel.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.channel.send(embed)
     message.member.voice.channel.leave();
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /퇴장 사용`)
    } else {
     message.reply('음성채널에 입장해주세요!');
    }
    }
}