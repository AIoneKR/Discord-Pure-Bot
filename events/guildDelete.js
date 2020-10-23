const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");

module.exports = async (client, guild) => {
	let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzM4MTI5MTY2NjE3ODA1OCIsImlhdCI6MTU4ODYwMTI2MCwiZXhwIjoxNjIwMTU4ODYwfQ.HqB1OWLNamYk9yq4wuXi4hpoZIipbQTsG-twqR4gbY6dgA0Zsp_7oDkKrs9oGjMwyy-3rY_OHIiqrNKiTBdF4Kln1UvovQrj-Ogdo5kM1ZDuTwVSqtFTvXGhH7kZ3HFNysy3E0FEdRiBXkHuexUNo7fQv6mOJstd5kUChq4s43s"
	res = await fetch("https://api.koreanbots.dev/bots/servers", {
    method: "POST",
    headers: { token, "Content-type": "application/json" },
    body: `{ "servers": "${client.guilds.cache.size}" }`
	}).then(res => res.json())
	console.log(res)

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