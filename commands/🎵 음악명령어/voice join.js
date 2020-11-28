const Discord = require("discord.js");

module.exports = {
    name: "입장",
    category: "🎵 음악명령어",
    description: "음성채널에 입장합니다.",
    run: async (client, message, args) => {
	if (message.member.voice.channel) {
	const embed = new Discord.MessageEmbed()
     .setColor("#00ff05")
     .setTitle(`Voice Join`)
	.setDescription("음성채널에 입장했습니다!")
     .addField("**채널 이름**", `**${message.member.voice.channel.name}**`)
	.addField("**채널 ID**", `**${message.member.voice.channel.id}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.channel.send(embed)
     message.member.voice.channel.join();
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /입장 사용`)
    } else {
     message.reply('음성채널에 입장해주세요!');
    }
    }
}