const Discord = require("discord.js");

module.exports = {
    name: "나가기",
    category: "🔐 개발자명령어",
    description: "해당서버를 나갑니다.",
	usage: "<서버ID>",
    run: async (client, message) => {
    if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
    let args = message.content.split(" ").slice(1);
	message.react('692644452220534857')
	let embed = new Discord.MessageEmbed()
    embed.setTitle(client.guilds.get(args[0]).name + "의 해당서버를 나갔습니다!")
    embed.setColor("#0052ce")
    embed.addField(" **서버소유자**", `**${client.guilds.get(args[0]).owner.user.tag}**`)
    message.channel.send(embed)
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /나가기 사용 > ${client.guilds.get(args[0]).name}`)
    client.guilds.cache.get(args[0]).leave()
    }
}