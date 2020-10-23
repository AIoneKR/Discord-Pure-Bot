const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "예방",
    category: "💉 코로나명령어",
    description: "코로나를 예방할수있는 예방수칙을 알려줍니다.",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
        
    
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("예방행동수칙!")
         .setImage(`https://cdn.discordapp.com/attachments/686995400376320102/695241162679779448/art_15805401184821_b11628.png`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /예방 사용`)
    }
}