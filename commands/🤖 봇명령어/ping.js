const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "핑",
    category: "🤖 봇명령어",
    description: "봇의 핑을 알려줍니다.",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩
        let emojil2 = client.emojis.cache.get("687558950148898826")//체크
        let emojil5 = client.emojis.cache.get("687558950266077206")//방패
        let emojil8 = client.emojis.cache.get("687558950421397509")//wifi
        
        let e0 = client.emojis.cache.get("692644452401020958")//X
        let e1 = client.emojis.cache.get("692644452220534857")//O
        
        const embed = new Discord.MessageEmbed()
         .setColor(0x00AE15)
         .setTitle(`${emojil}` + ' 봇 PING')
         .addField(`${emojil2}` + ' **Message Delay**',
         "__**" + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms**__")
         .addField(`${emojil5}` + ' **Ping API**',
         "__**" + `${Math.round(client.ws.ping)}` + "ms**__")
         .setTimestamp()
         .setFooter(message.author.tag, message.author.displayAvatarURL())
         msg.edit({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /핑 사용`)
    }
}