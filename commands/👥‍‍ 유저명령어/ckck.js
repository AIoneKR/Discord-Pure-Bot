const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "식별",
    category: "👥‍‍ 유저명령어",
    description: "유저를 식별합니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
          if (message.author.id == process.env.dvr) {
            ckck = "Bot Developer";
          } else if (message.author.id) {
            ckck = "User";
          }
         const embed = new MessageEmbed()
         .setColor(0x0045AE)
         .setTitle(`식별 완료`)
         .addField("**식별자**", `**${message.author.tag}**`, true)
		     .addField("**식별자 ID**", `**${message.author.id}**`, true)
		     .addField("**식별 결과**", `**${ckck}**`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send(embed)
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /식별 사용 > ${ckck}`)
    }
}