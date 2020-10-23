const Discord = require('discord.js');
const shorten = require('isgd');

module.exports = {
    name: "링크단축",
    category: "🔍 검색명령어",
    description: "링크를 단축해줍니다.",
	usage: "<단축할 링크>",
    run: async (client, message, args) => {
if (!args[0]) return message.channel.send('URL을 정확히 입력해주세요!')
if (!args[1]) {
shorten.shorten(args[0], function(res) {
if (res.startsWith('Error:')) return message.channel.send('URL을 정확히 입력해주세요!')
let embed = new Discord.MessageEmbed()
embed.setTitle("링크 단축")
embed.addField(`**변환전**`, `**${args[0]}**`)
embed.addField(`**변환후**`, `**${res}**`)
embed.setColor("#ff4c39")
message.channel.send(embed);
})
} else {
	shorten.custom(args[0], args[1], function(res) {
		let embed1 = new Discord.MessageEmbed()
		embed1.setTitle("링크 단축")
		embed1.addField(`**변환전**`, `**${args[0]}**`)
		embed1.addField(`**변환후**`, `**${res}**`)
		embed1.setColor("#ff4c39")
		if (res.startsWith('Error:')) return message.channel.send(embed1);
		let embed2 = new Discord.MessageEmbed()
		embed2.setTitle("링크 단축")
		embed2.addField(`**변환전**`, `**${args[0]}**`)
		embed2.addField(`**변환후**`, `**${res}**`)
		embed2.setColor("#ff4c39")
		message.channel.send(embed2);
		})
	}
}
}