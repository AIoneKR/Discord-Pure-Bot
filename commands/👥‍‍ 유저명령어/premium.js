const Discord = require("discord.js");

module.exports = {
    name: "프리미엄",
    category: "👥‍‍ 유저명령어",
    description: "프리미엄을 구매하면 더좋은 기능을 사용할수있습니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("프리미엄 가격")
         .addField("프리미엄 가격", "10000원 - 다이아 프리미엄\n•접두사변경\n\n5000원 - 골드 프리미엄\n•접두사변경\n\n2000원 - 실버 프리미엄\n•접두사변경")
		 .addField("구매 문의", `${client.users.cache.get(process.env.dvr).toString()} 혹은 ${client.users.cache.get(process.env.dvr).tag}`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /프리미엄 사용`)
    }
}