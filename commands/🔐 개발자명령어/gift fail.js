const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "후원실패",
    category: "🔐 개발자명령어",
    description: "후원 확인명령어.",
	usage: "<ID>",
    run: async (client, message, args) => {
        let user = client.users.cache.get(args[0])
		if (user) {
        if (message.author.id !== process.env.dvr) return message.react('692644452401020958')
        let embed = new MessageEmbed()
        embed.setTitle("전송")
        embed.addField(`**수신자**`, `**${user.tag}**`)
        embed.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed.setColor("#ff4c39")
        let embed01 = new MessageEmbed()
        embed01.setTitle("후원 확인")
        embed01.addField(`**확인자**`, `**${message.author.tag}**`)
        embed01.addField(`**확인정보**`, `**후원에 실패하셨습니다.\n다시시도해주세요.**`)
        embed01.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed01.setColor("#ff4c39")
        user.send(embed01)
        message.channel.send(embed)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /문상성공 사용`)
		} else {
		return;
		}
    }
}