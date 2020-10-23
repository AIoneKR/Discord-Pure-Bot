const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "후원",
    category: "👥‍‍ 유저명령어",
    description: "후원가능한 정보를 불러옵니다.",
    run: async (client, message, args) => {
     const embed = new Discord.MessageEmbed()
     .setColor(0x0032FE)
     .setTitle(`후원하는 방법`)
	 .setDescription("후원해주신 돈은 개발비로 사용됩니다!")
     .addField("**Pure 계좌**", `**은행명 : SC제일은행\n계좌번호 : 47116135897394**`)
	 .addField("**Pure 문상**", `**Pure의 DM으로 [문상 <문상PIN번호>] {접두사는 없습니다!}**`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
		message.channel.send(embed)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /후원 사용`)
    }
}