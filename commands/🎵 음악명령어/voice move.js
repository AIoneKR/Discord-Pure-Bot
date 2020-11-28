const Discord = require("discord.js");

module.exports = {
    name: "무브",
    category: "🎵 음악명령어",
    description: "너를 옮겨줍니다!",
    run: async (client, message, args) => {
	if(message.member.permissions.has("MANAGE_CHANNELS")){
	if (message.member.voice.channel) {
	try {
	if (args[0]) {
	const embed = new Discord.MessageEmbed()
     .setColor("#00ff05")
     .setTitle(`Voice User Move`)
	.setDescription("너를 옮겼습니다!")
	.addField("**기존 채널 이름**", `**${message.member.voice.channel.name}**`, true)
     .addField("**기존 채널 ID**", `**${message.member.voice.channel.id}**`, true)
     .addField(".", `.`)
     .addField("**신규 채널 이름**", `**${client.channels.cache.get(args[0]).name}**`, true)
	.addField("**신규 채널 ID**", `**${client.channels.cache.get(args[0]).id}**`, true)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.channel.send(embed)
     message.member.voice.setChannel(client.channels.cache.get(args[0]))
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /무브 사용`)
    } else {
	message.reply('어디로 옮겨야할지 모르겠어요!');
	}
	} catch {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**음성채널ID가 정확한지 확인해주세요!**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
	} else {
     message.reply('음성채널에 입장해주세요!');
    }
	} else {
		if (message.author.id === process.env.dvr) {
	if (message.member.voice.channel) {
	try {
	if (args[0]) {
	const embed = new Discord.MessageEmbed()
     .setColor("#00ff05")
     .setTitle(`Voice User Move`)
	.setDescription("너를 옮겼습니다!")
	.addField("**기존 채널 이름**", `**${message.member.voice.channel.name}**`, true)
     .addField("**기존 채널 ID**", `**${message.member.voice.channel.id}**`, true)
     .addField(".", `.`)
     .addField("**신규 채널 이름**", `**${client.channels.cache.get(args[0]).name}**`, true)
	.addField("**신규 채널 ID**", `**${client.channels.cache.get(args[0]).id}**`, true)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.channel.send(embed)
     message.member.voice.setChannel(client.channels.cache.get(args[0]))
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /무브 사용`)
    } else {
	message.reply('어디로 옮겨야할지 모르겠어요!');
	}
	} catch {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**음성채널ID가 정확한지 확인해주세요!**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
	} else {
     message.reply('음성채널에 입장해주세요!');
    }
		} else {
		let embed123 = new Discord.MessageEmbed()
        message.react('692644452401020958')
        embed123.setColor(0xff0d10)
        embed123.setTitle(`채널 관리 Permission ERROR!`)
        embed123.setDescription("권한이 없습니다!\n**필요한 권한 : 채널 관리 권한**")
        embed123.setTimestamp()
        embed123.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
        message.channel.send(embed123).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
		}
    }
    }
}