const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "문의",
    category: "🤖 봇명령어",
    description: "개발자에게 문의를 합니다.",
	usage: "<문의할 내용>",
    run: async (client, message) => {
        
        let args = message.content.split(" ").slice(1);
        let memeeeeee = args.join(" ")
        let time = moment().format('LLLL')
    
        let error61embed = new Discord.MessageEmbed()
        error61embed.setTitle("발신 실패")
        error61embed.addField(`**오류**`, `**아무것도 적혀있지 않아 발신이 불가합니다!**`)
        error61embed.setColor("#ff4c39")
        if(!args[0]) {
        message.channel.send(error61embed)
        message.react('692644452401020958')
        return;
    }
        message.react('692644452220534857')
        const embed123 = new Discord.MessageEmbed()
        embed123.setColor("#00ff00")
        embed123.setTitle(`${message.author.tag}님의 문의`)
        embed123.setDescription(`**ping : ${Math.round(client.ws.ping)}ms**`)
        embed123.addField("**발신자 서버 정보**", "**``" + `Server Name : ${`${message.guild.name}`}\nServer Owner Name : ${client.users.cache.get(message.guild.owner.id).tag}\nServer Owner ID : ${message.guild.owner.id}` + "``**")
        embed123.addField("**발신자 유저 정보**", "**``" + `Name : ${message.author.tag}\nID : ${message.author.id}` + "``**")
        embed123.addField("**문의 내용**", "**" + memeeeeee + "**")
        embed123.addField("**문의 시간**", `**${time}**`)
        embed123.setTimestamp()
        embed123.setFooter(message.author.tag, message.author.displayAvatarURL())
        setTimeout(function(){ client.users.cache.get(process.env.dvr).send(embed123) }, 7000)
        const embed = new Discord.MessageEmbed()
        embed.setColor("#00ff00")
        embed.setTitle(`${client.users.cache.get(process.env.dvr).tag}에게 발신되었습니다.`)
        embed.addField("**문의 내용**", "**" + memeeeeee + "**")
        embed.addField("**문의 시간**", `**${time}**`)
        embed.addField("**Pure 개발자 서버**", "**[[Pure Official Server 서포트 서버]](https://discord.gg/n2KUDk7)**")
        embed.setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681480291696640000/download.png`)
        embed.setTimestamp()
        embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         const embed5 = new Discord.MessageEmbed()
         embed5.setColor("#fffffe")
         embed5.setTitle('발신을 시작합니다.')
         embed5.addField("**발신 내용**", "**" + memeeeeee + "**")
         embed5.addField("**주의 사항**", '**``개발자는 정확하고 많은 정보가 주어집니다.``\n``신중히 문의 바랍니다.``**')
         const embed6 = new Discord.MessageEmbed()
         embed6.setColor("#fffffe")
         embed6.setTitle('발신중^..')
         embed6.addField("**발신 내용**", "**" + memeeeeee + "**")
         embed6.addField("**주의 사항**", '**``개발자는 정확하고 많은 정보가 주어집니다.``\n``신중히 문의 바랍니다.``**')
         const embed7 = new Discord.MessageEmbed()
         embed7.setColor("#fffffe")
         embed7.setTitle('발신중.^.')
         embed7.addField("**발신 내용**", "**" + memeeeeee + "**")
         embed7.addField("**주의 사항**", '**``개발자는 정확하고 많은 정보가 주어집니다.``\n``신중히 문의 바랍니다.``**')
         const embed8 = new Discord.MessageEmbed()
         embed8.setColor("#fffffe")
         embed8.setTitle('발신중..^')
         embed8.addField("**발신 내용**", "**" + memeeeeee + "**")
         embed8.addField("**주의 사항**", '**``개발자는 정확하고 많은 정보가 주어집니다.``\n``신중히 문의 바랍니다.``**')
         message.channel.send(embed5).then((th) => {
            setTimeout(function(){ th.edit(embed6) }, 1000)
            setTimeout(function(){ th.edit(embed7) }, 2000)
            setTimeout(function(){ th.edit(embed8) }, 3000)
            setTimeout(function(){ th.edit(embed6) }, 4000)
            setTimeout(function(){ th.edit(embed7) }, 5000)
            setTimeout(function(){ th.edit(embed8) }, 6000)
            setTimeout(function(){ th.edit(embed) }, 6500)
         })
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /문의 사용 > ${memeeeeee}`)
    }
}