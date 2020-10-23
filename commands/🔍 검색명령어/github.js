const Discord = require("discord.js");
const fetch = require('node-fetch');
const moment = require('moment');

module.exports = {
    name: "깃허브",
	aliases: ["깃헙"],
    category: "🔍 검색명령어",
    description: "깃허브에 있는 유저를 불러옵니다.",
	usage: "<검색할 유저 이름>",
    run: async (client, message, args) => {
	if (!args[0]) {
	return message.channel.send('유저의 이름을 입력해주세요!');
	}
	try {
	let list = await fetch(`https://api.github.com/users/${args[0]}`).then(response => response.json());
	let embed = new Discord.MessageEmbed()
	.setColor('#EFFF00')
	.setTitle(list.login)
	.setURL(`${list.html_url}`)
	.addFields(
		{ name: '이름', value: `[${list.login}](${list.html_url})` },
		{ name: 'ID', value: list.id },
		{ name: '이메일', value: list.email },
		{ name: '게시물', value: list.public_repos },
		{ name: '계정을 만든날', value: moment(list.created_at).format('LLLL') },
		{ name: '마지막 업데이트', value: moment(list.updated_at).format('LLLL') },
	)
	.setThumbnail(list.avatar_url)
	.setFooter("현제 본기능은 유저검색시 느려터질수있습니다.")
	.setTimestamp()
	message.channel.send(embed);
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /깃허브 사용 > ${args[0]}`)
	} catch(e) {
	return message.channel.send(`찾을수 없는 유저입니다.`)
	}
	}
}