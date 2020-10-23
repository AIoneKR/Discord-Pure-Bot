const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "진료소",
    category: "💉 코로나명령어",
    description: "진료소를 알려줍니다.",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
        
    
        const embed = new Discord.MessageEmbed()
     .setColor(0x0023AE)
     .setAuthor(`COVID-19(코로나) 진료소`)
     .setTitle(`지역별 선별 진료소 현황`)
     .setURL(`https://www.mohw.go.kr/react/popup_200128.html`)
     .setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681475948432064512/download.png`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
     message.channel.send({embed})
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /진료소 사용`)
    }
}