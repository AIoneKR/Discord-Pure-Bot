const Discord = require("discord.js");
const fs = require("fs");
const protects = require("../../Database/protects.json");

module.exports = {
    name: "서버보호",
    category: "🛡️ 관리명령어",
    description: "서버를 공개 혹은 비공개로 변경할수있습니다.",
    run: async (client, message) => {
if(!protects[message.guild.id]){
	protects[message.guild.id] = {
		protects: "falses"
	};
}
if(message.member.permissions.has("ADMINISTRATOR")){
const embed = new Discord.MessageEmbed()
		let filter = (reaction, user) => (reaction.emoji.name === '🔒' || reaction.emoji.name === '🔓') && user.id === message.author.id
		let firstembed = new Discord.MessageEmbed()
		.setColor("#FFFFFA")
		.setTitle("서버 공개 & 비공개")
		.addField("**서버이름**", `**${message.guild.name}**`, true)
		.addField("**서버ID**", `**${message.guild.id}**`, true)
          message.channel.send(firstembed).then((th) => {
		  th.react('🔓')
		  setTimeout(() => {
		  th.react('🔒')
		  }, 1000)
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '🔓') {
	const embed = new Discord.MessageEmbed()
	embed.setColor("#44ff7a")
	embed.setTitle("공개로 설정되었습니다.")
	embed.addField("**서버이름**", `**${message.guild.name}**`, true)
	embed.addField("**서버ID**", `**${message.guild.id}**`, true)
	th.edit(embed)
	th.reactions.removeAll()
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버 보안 > 공개`)
	protects[message.guild.id] = {
		protects: "trues"
	};

	fs.writeFile("./Database/protects.json", JSON.stringify(protects), (err) => {
		if (err) console.log(err)
	})
			} else {
			  let embed1 = new Discord.MessageEmbed()
			  embed1.setColor("RED")
			  embed1.setTitle("비공개로 설정되었습니다.")
			  embed1.addField("**서버이름**", `**${message.guild.name}**`, true)
			  embed1.addField("**서버ID**", `**${message.guild.id}**`, true)
			  th.edit(embed1)
			  th.reactions.removeAll()
			  console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버 보안 > 비공개`)
	protects[message.guild.id] = {
		protects: "falses"
	};

	fs.writeFile("./Database/protects.json", JSON.stringify(protects), (err) => {
		if (err) console.log(err)
	})
			}
		  })
		})
} else {
	  let embed2 = new Discord.MessageEmbed()
	embed2.setColor(0xff0d10)
	embed2.setTitle(`ADMINISTRATOR Permission ERROR!`)
	embed2.setDescription("권한이 없습니다!\n**필요한 권한 : 관리자 권한**")
	embed2.setTimestamp()
	embed2.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	message.channel.send(embed2).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
    message.react('692644452401020958')
 }
}
}