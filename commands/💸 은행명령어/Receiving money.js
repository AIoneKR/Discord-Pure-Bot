const Discord = require("discord.js");
const fs = require("fs");
const moneys = require("../../Database/moneys.json");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "돈받기",
    category: "💸 은행명령어",
    description: "돈을 랜덤으로 받을수있습니다.(쿨타임 60초)",
    run: async (client, message) => {
    let coinAmt = Math.floor(Math.random() * 10000) + 1000;
	
	moneys[message.author.id] = {
		moneys: moneys[message.author.id].moneys + coinAmt
	};
	fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
		if (err) console.log(err)
	});

	let embed = new Discord.MessageEmbed()
    embed.setTitle("돈받기")
    embed.addField(`**받은돈**`, `**${coinAmt}원**`, true)
    embed.setColor("RED")
    message.reply({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /돈받기 사용 > ${coinAmt}원`)
    }
}