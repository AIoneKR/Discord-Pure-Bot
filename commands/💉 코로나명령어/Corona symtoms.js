const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "증상",
    category: "💉 코로나명령어",
    description: "코로나의 증상을 알려줍니다.",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
        
    
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("COVID-19(코로나) 증상")
         .addField('**증상 정보**', `**코로나바이러스 감염증(COVID-19)은 인후통, 기침, 발열과 같은 가벼운 증상이 특징입니다. 일부 환자에게서는 더 심각하게 폐렴이나 호흡 곤란이 나타나기도 합니다.\n드물게는 사망에 이르는 경우도 있습니다. 노인 및 기저 질환자(예: 천식, 당뇨, 심장 질환 환자)에게 심각한 증상이 나타날 가능성이 더 높습니다.\n\n주요 증상:\n•인후통\n•기침\n•발열\n•호흡 곤란 (심한 경우)**`)
         .setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681500701356064772/3c22f1dc6c8cb6bb754b5e5c36ca3ef2.jpg`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /증상 사용`)
    }
}