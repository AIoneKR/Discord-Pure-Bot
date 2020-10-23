const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../../Database/coins.json");
const moneys = require("../../Database/moneys.json");

module.exports = {
    name: "파산",
    category: "💸 은행명령어",
    description: "자신을 파산시킵니다.",
    run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
		let filter = (reaction, user) => (reaction.emoji.name === '✅' || reaction.emoji.name === '❎') && user.id === message.author.id
		let firstembed = new Discord.MessageEmbed()
		.setColor("#FFFFFA")
		.setTitle("파산하시겠습니까?")
		.addField("**Name**", `**${message.author.tag}**`, true)
		.addField("**ID**", `**${message.author.id}**`, true)
		.addField("**파산되는 정보**", `**통장, 지갑**`)
		message.react('🇩')
		setTimeout(() => {
		message.react('🇲')
		}, 500)
          message.author.send(firstembed).then((th) => {
		  th.react('✅')
		  setTimeout(() => {
		  th.react('❎')
		  }, 1000)
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '✅') {
	const embed = new Discord.MessageEmbed()
	embed.setColor("#44ff7a")
	embed.setTitle("성공적으로 파산되었습니다!")
	embed.addField("**Name**", `**${message.author.tag}**`, true)
	embed.addField("**ID**", `**${message.author.id}**`, true)
	embed.addField("**파산되는 정보**", `**통장, 지갑**`)
	th.edit(embed)
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /파산 성공`)
	
	coins[message.author.id] = {
		coins: 0
	};
	
	moneys[message.author.id] = {
		moneys: 0
	};

	fs.writeFile("./Database/coins.json", JSON.stringify(coins), (err) => {
		if(err) console.log(err)
	});	
	fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
		if(err) console.log(err)
	});

			} else {
			  let embed1 = new Discord.MessageEmbed()
			  embed1.setColor("RED")
			  embed1.setTitle("파산 거부")
			  embed1.addField("**Name**", `**${message.author.tag}**`, true)
			  embed1.addField("**ID**", `**${message.author.id}**`, true)
			  th.edit(embed1)
			  console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /파산 거부`)
			}
		  })
		})
    }
}