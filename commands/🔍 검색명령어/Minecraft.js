const Discord = require("discord.js");
const fetch = require('node-fetch');
const moment = require('moment');

module.exports = {
    name: "마인크래프트",
	aliases: ["마크"],
    category: "🔍 검색명령어",
    description: "마인크래프트 유저를 검색합니다.",
	usage: "<검색할 유저 이름>",
    run: async (client, message, args) => {
	if (!args[0]) {
	return message.channel.send('유저의 이름을 입력해주세요!');
	}
	try {
	let UUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(response => response.json());
	let UU = UUID.id
	let list = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${UU}`).then(response => response.json());
	let soso = await fetch(`https://api.mojang.com/user/profiles/${UU}/names`).then(response => response.json());
	let embed = new Discord.MessageEmbed()
	.setColor('#EFFF00')
	.setTitle(list.name)
	//.setURL()
	.addFields(
		{ name: '이름', value: list.name },
		{ name: 'ID', value: list.id },
	)
	message.channel.send(embed);
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /마크 사용 > ${args[0]}`)
	} catch(e) {
	return message.channel.send(`찾을수 없는 유저입니다.\nError : ${e.message}`)
	}
	}
}
