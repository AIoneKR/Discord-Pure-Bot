const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const process = require('process');
const fs = require("fs");
var os = require('os');

module.exports = {
    name: "봇정보",
    category: "🤖 봇명령어",
    description: "봇정보를 보여줍니다.",
    run: async (client, message, args) => {
        
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩
        
        let emojil2 = client.emojis.cache.get("687558950148898826")//체크
        let emojil3 = client.emojis.cache.get("682612640958513162")//사람
        let emojil4 = client.emojis.cache.get("687558949976801336")//민증
        let emojil5 = client.emojis.cache.get("687558950266077206")//방패
        let emojil6 = client.emojis.cache.get("687558950207619114")//쨈
        let emojil7 = client.emojis.cache.get("687558950538707036")//알람
        let emojil8 = client.emojis.cache.get("687558950421397509")//wifi
    
        let e0 = client.emojis.cache.get("692644452401020958")//X
        let e1 = client.emojis.cache.get("692644452220534857")//O
	   
	   const msg = await message.channel.send(`봇정보`);

        const embed = new MessageEmbed()
         .setColor(0x268f75)
         .setTitle(client.user.tag + "봇정보")
         .addField(`${emojil4}` + ` **봇이름**`, `${client.user.tag}`, true)
         .addField(`${emojil3}` + ` **개발자**`, `${client.users.cache.get(process.env.dvr).tag}`, true)
         .addField(`${emojil6}` + ` **공식 서버**`, `**[[Pure Official Server]](https://discord.gg/n2KUDk7)**\n**[[공식 웹사이트]](http://teamleo.ga/)**`, true)
         .addField(`${emojil5}` + ` **봇 CPU**`, `${os.cpus()[0].model}`, true)
	     .addField(`${emojil5}` + ` **봇 Platform**`, `${os.platform()}`, true)
	     .addField(`${emojil5}` + ` **봇 ARCH**`, `${process.arch}`, true)
	     .addField(`${emojil5}` + ` **봇 개발언어**`, `Node.js / Discord.js`, true)
         .addField(`${emojil2}` + ` **Discord.js 버전**`, `v${Discord.version}`, true)
         .addField(`${emojil2}` + ` **Node.js 버전**`, `${process.version}`, true)
         .addField(`${emojil2}` + ` **Bot 버전**`, `${process.env.v}`, true)
         .addField(`${emojil5}` + ' **Message Delay**', "__**" + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms**__", true)
         .addField(`${emojil8}` + ' **Ping API**', "__**" + Math.round(client.ws.ping) + "ms**__", true)
         .setTimestamp()
         .setFooter(message.author.tag, message.author.avatarURL())
	    .setThumbnail(client.user.displayAvatarURL())
        msg.delete()
	    message.channel.send(embed)
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /봇정보 사용`)
    }
}