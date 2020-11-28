const Discord = require("discord.js");
const fs = require("fs");
const prefixes = require("../../Database/prefixes.json");
const premiums = require("../../Database/premiums.json");

module.exports = {
    name: "접두사",
    aliases: ["prefix"],
    category: "🔰 프리미엄명령어",
    description: "개인의 접두사를 설정합니다.",
	usage: "<prefix>",
    run: async (client, message) => {
	if(!prefixes[message.author.id]){
        prefixes[message.author.id] = {
            prefixes: process.env.prefix
        };
    }
    if(!premiums[message.author.id]){
        premiums[message.author.id] = {
            premiums: "falses"
        };
    }
    const premium = premiums[message.author.id].premiums;
	const prefix = prefixes[message.author.id].prefixes;
	if (premium === "1" || premium === "2" || premium === "3") {
	const embed = new Discord.MessageEmbed()
	let args = message.content.split(" ").slice(1);
	let error61embed = new Discord.MessageEmbed()
	error61embed.setTitle("오류!")
	error61embed.addField(`**오류**`, `**공백이거나 알수없는 값입니다!**`)
	error61embed.setColor("#ff4c39")
	if(!args[0]) {
	message.reply(error61embed)
	message.react('692644452401020958')
	return;
}
	message.react('692644452220534857')

	embed.setColor("#FFFFFA")
	embed.setTitle("접두사 설정 | set prefix")
	embed.addField("이전 설정", "``" + `${prefix}` + "``")
	embed.addField("최근 설정", "``" + `${args[0]}` + "``")
	message.channel.send({embed})
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /접두사 사용 > ${args}`)

	prefixes[message.author.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./Database/prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log(err)
	})
    } else {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("프리미엄만 사용 가능한 명령어입니다!")
        error2embed.addField(`**필요한 등급**`, `**실버 프리미엄, 골드 프리미엄, 다이아 프리미엄**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
	}
	}
}