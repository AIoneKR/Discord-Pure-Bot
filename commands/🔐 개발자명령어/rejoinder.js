const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "답변",
    category: "🔐 개발자명령어",
    description: "해당유저에게 답변을 합니다.",
	usage: "<ID (말할TEXT)>",
    run: async (client, message) => {
        let args = message.content.split(" ").slice(1);
        let args123 = message.content.split(" ").slice(2);
        var text11 = args123.join(" ");
        let user = client.users.cache.get(args[0])
        let dMessage = args.join(" ").slice(1);
    
        if (message.author.id !== process.env.dvr) return message.react('692644452401020958')
        let embed = new MessageEmbed()
        embed.setTitle("Developer DM")
        embed.addField(`**발신자**`, `**${message.author.tag}**`)
        embed.addField(`**발신내용**`, `**${text11}**`)
        embed.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed.setColor("#0052ce")
        let embed01 = new MessageEmbed()
        embed01.setTitle("Developer DM")
        embed01.addField(`**발신자**`, `**${message.author.tag}**`)
        embed01.addField(`**수신자**`, `**${user.tag}**`, true)
        embed01.addField(`**발신내용**`, `**${text11}**`, true)
        embed01.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed01.setColor("#0052ce")
        user.send(embed)
        message.channel.send(embed01)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /개발자 dm 사용 > ${dMessage}`)
    }
}