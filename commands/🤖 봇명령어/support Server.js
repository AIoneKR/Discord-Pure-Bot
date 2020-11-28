const Discord = require("discord.js");

module.exports = {
    name: "서포트",
    category: "🤖 봇명령어",
    description: "서포트링크를 줍니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
        const embed = new Discord.MessageEmbed()
     .setColor(0x0074AE)
     .setAuthor("서포트 서버를 가져왔습니다!\nNeooo Official Server")
     .setDescription(`**[[Pure Official Server 서포트 서버]](https://discord.gg/n2KUDk7)**`)
     .addField(`**Pure 공식 웹사이트**`, `**[[공식 웹사이트]](http://teamleo.ga/)**`)
     .setThumbnail(`https://cdn.discordapp.com/avatars/677381291666178058/2b4c05f207ea9f0cfb6d405fb932c657.png?size=2048`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
     message.channel.send({embed})
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서포트 사용`)
    }
}