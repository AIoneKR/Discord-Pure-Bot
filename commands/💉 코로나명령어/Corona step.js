const Discord = require("discord.js");

module.exports = {
    name: "단계",
    category: "💉 코로나명령어",
    description: "코로나의 단계를 알려줍니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("COVID-19(코로나) 단계")
         .attachFiles(['./img/corona.png'])
         .setImage('attachment://corona.png', { size: 1024 })
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /증상 사용`)
    }
}