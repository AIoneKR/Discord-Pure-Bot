const Discord = require("discord.js");

module.exports = {
    name: "이용약관",
    category: "🤖 봇명령어",
    description: "Pure 이용약관",
    run: async (client, message, args) => {
        message.react('692644452220534857')
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("Pure 이용약관!")
         .addField("**이용약관**", `**[[Pure Terms of Service]](https://github.com/AIoneKR/Team-Leo-Discord-Bot/blob/master/Team%20Leo%20Tos.md)**`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /이용약관 사용`)
    }
}