const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");

module.exports = async (client, guild) => {
	console.log(`┌────────Delete server!!────────`)
	console.log(`│ 서버이름 : ${guild.name}`)
	console.log(`│ 서버소유자 : ${guild.owner.user.tag}`)
	console.log(`│ 서버고유번호 : ${guild.id}`)
	console.log(`│ 서버유저수 : ${guild.memberCount} 명`)
	console.log(`└──────────────────────────────`)
	const embed = new Discord.MessageEmbed()
	embed.setColor("#FFFFFA")
	embed.setTitle(`Server Delete!`)
	embed.addField("**서버이름**", guild.name)
	embed.addField("**서버소유자**", "**``" + guild.owner.user.tag + "``**", true)
	embed.addField("**서버소유자 고유번호**", "**``" + guild.owner.user.id + "``**", true)
	embed.addField("**서버고유번호**", "**``" + guild.id + "``**")
	embed.addField("**서버유저수**", "**``" + guild.memberCount + "``**")
	client.users.cache.get(process.env.dvr).send({embed})
}
