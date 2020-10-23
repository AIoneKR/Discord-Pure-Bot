const fs = require("fs");
const moneys = require("../../Database/moneys.json");
const Discord = require('discord.js');
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "돈추가",
    category: "🔐 개발자명령어",
    description: "돈추가를 합니다.",
	usage: "<Tag (지급할돈)>",
    run: async (client, message) => {
        
        if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
        let args = message.content.split(" ").slice(1);
    
    let pUser = message.guild.member(message.mentions.users.get()) || message.guild.members.cache.get(args[0]) || message.author;
    
    if(!moneys[pUser.id]){
        moneys[pUser.id] = {
            moneys: 0
        };
    }
    
    let pmoneys = moneys[pUser.id].moneys;
    let smoneys = moneys[message.author.id].moneys;
    let umoneys = moneys[message.author.id].moneys;
    
    if(smoneys)
    
    try {
        var cicic = parseFloat(args[1]);
    } catch {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**다시시도해주세요!**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
    let error3embed = new Discord.MessageEmbed()
    error3embed.setTitle("오류!")
    error3embed.addField(`**오류**`, `**다시시도해주세요!**`)
    error3embed.setColor("#ff4c39")
    if(cicic != Math.floor(cicic)) return message.reply(error3embed).then(message.react('692644452401020958'))
    
    
    
    moneys[pUser.id] = {
        moneys: pmoneys + parseInt(args[1])
    };
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    embed.setTitle("Pure Pay 개발자 입금!")
    embed.addField(`**입금한 현금**`, `${args[1]}원`)
    embed.addField(`**입금자명**`, `${message.author.toString()}`, true)
    embed.addField(`**예금주명**`, `**${pUser}**`, true)
    embed.setColor("#0052ce")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /돈추가 사용 > ${user.tag} > ${args[1]}원`)
    
    fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
        if(err) console.log(err)
    });
    }
}