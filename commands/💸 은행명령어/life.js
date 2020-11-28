const Discord = require("discord.js");
const fs = require("fs");
const moneys = require("../../Database/moneys.json");

module.exports = {
    name: "인생",
    category: "💸 은행명령어",
    description: "랜덤으로 돈을 벌고 잃을수있습니다.",
    run: async (client, message) => {
	let chances = ["win", "lose"]
	var pick = chances[Math.floor(Math.random() * chances.length)];

	if(pick == "lose") {
		let loses = ["실수로 슈퍼카를 발로깟습니다!", "쓰래기 무단투기를 했습니다!", "오토바이를 타다가 헬멧을 안써서 벌금을 물었습니다!", "노상방뇨를 하다가 경찰에게 걸렸습니다!", "노트북에 실수로 커피를 부어버렸습니다!", "친구인줄알고 경찰뒤통수를 때려서 벌금을 물었습니다!", "게임에 캐시를 지르다가 개인정보가 털려서 돈을 잃었습니다!"]
		var lose1 = loses[Math.floor(Math.random() * loses.length)];
		let sssss1 = Math.floor(Math.random() * 100000) + 100000;
		moneys[message.author.id].moneys -= sssss1;
		fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
			if(err) console.log(err)
		});
		let loseembed = new Discord.MessageEmbed()
		loseembed.setTitle("돈을 잃었습니다!")
		loseembed.addField(`**잃은 내용**`, `**${lose1}**`, true)
		loseembed.addField(`**잃은돈**`, `**${sssss1}원**`, true)
		loseembed.setColor("#ff4c39")
		message.react('692644452220534857')
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /인생 잃음 사용 > ${sssss1}원`)
		return message.reply(loseembed)
	} else {
		let wins = ["지나가다가 돈을 주웠습니다!", "누군가 돈을 주고 갔습니다!", "초록이가 벤트를 타다가 붙잡혔습니다!\n현상금을 받았습니다!", "돈벼락이 떨어졌습니다!", "인생을 즐겁게 살았습니다!", "누군가의 반려동물을 찾아줘서 사례금을 받았습니다!"]
		var win1 = wins[Math.floor(Math.random() * wins.length)];
		let sssss2 = Math.floor(Math.random() * 100000) + 100000;
		moneys[message.author.id].moneys += sssss2;
		fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
			if(err) console.log(err)
		});
		let winembed = new Discord.MessageEmbed()
		winembed.setTitle("돈을 벌었습니다!")
		winembed.addField(`**벌은 내용**`, `**${win1}**`, true)
		winembed.addField(`**받은돈**`, `**${sssss2}원**`, true)
		winembed.setColor("#9fff70")
		message.react('692644452220534857')
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /인생 벌음 사용 > ${sssss2}원`)
		return message.reply(winembed)
	}
    }
}