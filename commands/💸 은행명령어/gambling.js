const Discord = require("discord.js");
const fs = require("fs");
const moneys = require("../../Database/moneys.json");

module.exports = {
    name: "도박",
    category: "💸 은행명령어",
    description: "지갑에 있는돈으로 도박을 할수있습니다.",
	usage: "<도박할돈 | 올인>",
    run: async (client, message) => {
	var maxBet = 1000000;
	let error0embed = new Discord.MessageEmbed()
	error0embed.setTitle("오류!")
	error0embed.addField(`**오류**`, `**돈이없습니다!**`)
	error0embed.addField(`**지갑**`, `**${moneys[message.author.id].moneys}원**`)
	error0embed.setColor("#ff4c39")
	if(!moneys[message.author.id] || moneys[message.author.id].moneys <= 0) return message.reply(error0embed).then(message.react('692644452401020958'))
	
	let args = message.content.split(" ").slice(1);
	let error1embed = new Discord.MessageEmbed()
	error1embed.setTitle("오류!")
	error1embed.addField(`**오류**`, `**다시시도해주세요!**`)
	error1embed.setColor("#ff4c39")
	if(!args[0]) return message.reply(error1embed).then(message.react('692644452401020958'))
	if(args[0].includes("-")) return message.reply(error1embed).then(message.react('692644452401020958'))
	
	if(args[0].toLowerCase() == "올인") args[0] = moneys[message.author.id].moneys;
	
	try {
		var bet = parseFloat(args[0]);
	} catch {
		let error2embed = new Discord.MessageEmbed()
		error2embed.setTitle("오류!")
		error2embed.addField(`**오류**`, `**다시시도해주세요!**`)
		error2embed.setColor("#ff4c39")
		message.react('692644452401020958')
		return message.reply(error2embed).then(message.react('692644452401020958'))
	}
	let error3embed = new Discord.MessageEmbed()
	error3embed.setTitle("오류!")
	error3embed.addField(`**오류**`, `**배팅할 금액을 정확히 입력해주세요!**`)
	error3embed.setColor("#ff4c39")
	if(bet != Math.floor(bet)) return message.reply(error3embed).then(message.react('692644452401020958'))
	let error4embed = new Discord.MessageEmbed()
	error4embed.setTitle("오류!")
	error4embed.addField(`**오류**`, `**돈이없습니다!**`)
	error4embed.addField(`**지갑**`, `**${moneys[message.author.id].moneys}원**`)
	error4embed.setColor("#ff4c39")
	if(moneys[message.author.id].moneys < bet) return message.reply(error4embed).then(message.react('692644452401020958'))
	let error5embed = new Discord.MessageEmbed()
	error5embed.setTitle("오류!")
	error5embed.addField(`**최대 한도**`, `**1000000원**`)
	error5embed.setColor("#ff4c39")
	if(bet > maxBet) return message.reply(error5embed).then(message.react('692644452401020958'))
	let error6embed = new Discord.MessageEmbed()
	error6embed.setTitle("오류!")
	error6embed.addField(`**알수없음**`, `**0보다 높은 숫자를 입력해주세요!**`)
	error6embed.setColor("#ff4c39")
	if(bet == 0) return message.reply(error6embed).then(message.react('692644452401020958'))
		if (message.author.id == process.env.dvr) {
			moneys[message.author.id].moneys += bet;
		fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
			if(err) console.log(err)
		});
		let winembed = new Discord.MessageEmbed()
		winembed.setTitle("성공!")
		winembed.addField(`**현재 지갑**`, `**${moneys[message.author.id].moneys}원**`)
		winembed.setColor("#9fff70")
		message.react('692644452220534857')
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /성공 사용 > ${moneys[message.author.id].moneys}원`)
		return message.reply(winembed)
		}
	
	let chances = ["win", "lose"]
	var pick = chances[Math.floor(Math.random() * chances.length)];

	
	if(pick == "lose") {
		moneys[message.author.id].moneys -= bet;
		fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
			if(err) console.log(err)
		});
		let loseembed = new Discord.MessageEmbed()
		loseembed.setTitle("실패!")
		loseembed.addField(`**현재 지갑**`, `**${moneys[message.author.id].moneys}원**`)
		loseembed.setColor("#ff4c39")
		message.react('692644452220534857')
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /실패 사용 > ${moneys[message.author.id].moneys}원`)
		return message.reply(loseembed)
	} else {
		moneys[message.author.id].moneys += bet;
		fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
			if(err) console.log(err)
		});
		let winembed = new Discord.MessageEmbed()
		winembed.setTitle("성공!")
		winembed.addField(`**현재 지갑**`, `**${moneys[message.author.id].moneys}원**`)
		winembed.setColor("#9fff70")
		message.react('692644452220534857')
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /성공 사용 > ${moneys[message.author.id].moneys}원`)
		return message.reply(winembed)
	}
    }
}