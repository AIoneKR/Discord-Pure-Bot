const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "후원성공",
    category: "🔐 개발자명령어",
    description: "후원 확인명령어.",
	usage: "<ID> <문화상품권 | 계좌입금>",
    run: async (client, message, args) => {
        let user = client.users.cache.get(args[0])
		if (user) {
        if (message.author.id !== process.env.dvr) return message.react('692644452401020958')
		let error3embed = new MessageEmbed()
		error3embed.setTitle("오류!")
		error3embed.addField(`**오류**`, `**정확히 입력해주세요!**`)
		error3embed.setColor("#ff4c39")
		if(args[0] != Math.floor(args[0])) return message.reply(error3embed).then(message.react('692644452401020958'))
		if(!args[2]) return message.reply(error3embed).then(message.react('692644452401020958'))
        let embed = new MessageEmbed()
        embed.setTitle("전송")
        embed.addField(`**수신자**`, `**${user.tag}**`)
        embed.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed.setColor("#44ff7a")
        let embed01 = new MessageEmbed()
        embed01.setTitle("후원 확인")
        embed01.addField(`**확인자**`, `**${message.author.tag}**`)
        embed01.addField(`**확인정보**`, `**후원이 성공적으로 완료되었습니다.**`)
		embed01.addField(`**후원한 금액**`, `**${args[1]}원**`)
		embed01.addField(`**후원 방식**`, `**${args[2]}**`)
        embed01.setFooter(`${message.member.user.tag} - 인증됨`, message.author.avatarURL())
        embed01.setColor("#44ff7a")
        user.send(embed01)
        message.channel.send(embed)
        console.log(`> ${message.guild.name} < ${message.author.tag} > ${user.tag} (${message.author.id}) /문상성공 사용`)
		} else {
		return;
		}
    }
}