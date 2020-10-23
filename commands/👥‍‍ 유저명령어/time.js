const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "시간",
    category: "👥‍‍ 유저명령어",
    description: "한국의 현재시간",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
        
        let emojil7 = client.emojis.cache.get("687558950538707036")//알람
        let time = moment().format('LLLL')
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle(`${emojil7}` + " 한국 현재시간!")
         .addField("**현재시간**", `**${time}**`)
         .setThumbnail(`https://cdn.discordapp.com/attachments/677451054526496768/694775066574979122/images.jpeg.jpg`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /현제시간 사용 > ${time}`)
    }
}