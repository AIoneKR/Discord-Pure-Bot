const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "봇초대",
    category: "🤖 봇명령어",
    description: "봇초대를 할수있는 링크를 줍니다.",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
    
        const embed = new Discord.MessageEmbed()
     .setColor(0x0074AE)
     .setTitle(`봇초대 링크를 가져왔습니다!`)
     .addField("**Pure 초대링크**", `**[[봇초대 하기]](https://discord.com/oauth2/authorize?client_id=677381291666178058&permissions=8&redirect_uri=http%3A%2F%2Fteamleo.ga%2F&response_type=code&scope=bot%20identify)**`)
     .addField("**Pure 공식 웹사이트**", `**[[공식 웹사이트]](http://teamleo.ga/)**`)
     .setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681479667127025747/pngtree-fan-sport-support-supporter-flat-color-icon-vector-icon-png-image_1650848.jpg`)
     .setTimestamp()
     .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
     message.channel.send({embed})
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /봇초대 사용`)
    }
}