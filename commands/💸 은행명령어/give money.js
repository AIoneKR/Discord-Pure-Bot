const Discord = require('discord.js');
const fs = require("fs");
const moneys = require("../../Database/moneys.json");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "돈주기",
    category: "💸 은행명령어",
    description: "상대방에게 돈을 줄수있습니다.",
	usage: "<Tag (줄돈)>",
    run: async (client, message) => {
        
        let args = message.content.split(" ").slice(1);
    if(!moneys[message.author.id]){
        let embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "님! 돈이 없군요!")
        embed.setColor("#00FF00")
        return message.channel.send(embed).then(message.react('692644452401020958'))
    }
    
    let pUser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    
    if(!moneys[pUser.id]){
        moneys[pUser.id] = {
            moneys: 0
        };
    }
    
    let pmoneys = moneys[pUser.id].moneys;
    let smoneys = moneys[message.author.id].moneys;
    let umoneys = moneys[message.author.id].moneys;
    
    try {
        var cicic = parseFloat(args[1]);
        var cic = parseFloat(args[0]);
    } catch {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**예금주명을 정확히 입력해주세요!**`)
        error2embed.setColor("#ff4c39")
        if(cic != Math.floor(cic)) return message.reply(error2embed).then(message.react('692644452401020958'))
    }
    let error3embed = new Discord.MessageEmbed()
    error3embed.setTitle("오류!")
    error3embed.addField(`**오류**`, `**정확히 입력해주세요!**`)
    error3embed.setColor("#ff4c39")
    if(cicic != Math.floor(cicic)) return message.reply(error3embed).then(message.react('692644452401020958'))
	if(args[1].includes("-")) return message.reply(error3embed)
    let error4embed = new Discord.MessageEmbed()
    error4embed.setTitle("오류!")
    error4embed.addField(`**오류**`, `**지갑에 잔액이 없습니다!**`)
    error4embed.addField(`**지갑**`, `**${moneys[message.author.id].moneys}원**`)
    error4embed.setColor("#ff4c39")
    if(moneys[message.author.id].moneys < cicic) return message.reply(error4embed).then(message.react('692644452401020958'))
    
    let error20embed = new Discord.MessageEmbed()
    error20embed.setTitle("오류!")
    error20embed.addField(`**오류**`, `**예금주명을 정확히 입력해주세요!**`)
    error20embed.setColor("#ff4c39")
    if(cic > 0) return message.reply(error20embed).then(message.react('692644452401020958'))
    
    const user12 = message.mentions.users.first();
        if (user12) {
            let error200embed = new Discord.MessageEmbed()
            error200embed.setTitle("오류!")
            error200embed.addField(`**오류**`, `**자신에게는 돈을 줄수없습니다!**`)
            error200embed.setColor("#ff4c39")
        if (user12.id === message.author.id) return message.reply(error200embed).then(message.react('692644452401020958'))
    
    moneys[message.author.id] = {
        moneys: smoneys - parseInt(args[1])
    };
    
    moneys[pUser.id] = {
        moneys: pmoneys + parseInt(args[1])
    };
    let user = message.mentions.users.first();
    let embed = new Discord.MessageEmbed()
    embed.setTitle("Pure Pay 입금!")
    embed.addField(`**입금한 현금**`, `${args[1]}원`)
    embed.addField(`**입금자명**`, `${message.author.toString()}`, true)
    embed.addField(`**예금주명**`, `**${pUser}**`, true)
    embed.setColor("#0052ce")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /돈주기 사용 > ${user.tag} > ${args[1]}원`)
    
    fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
        if(err) console.log(err)
    });
    } else {
        let error20embed = new Discord.MessageEmbed()
        error20embed.setTitle("오류!")
        error20embed.addField(`**오류**`, `**예금주명을 정확히 입력해주세요!**`)
        error20embed.setColor("#ff4c39")
    message.reply(error20embed).then(message.react('692644452401020958'))
    return;
    };
    }
}