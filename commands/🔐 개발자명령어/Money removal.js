const Discord = require('discord.js');
const fs = require("fs");
const coins = require("../../Database/coins.json");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "돈제거",
    category: "🔐 개발자명령어",
    description: "돈제거를 합니다.",
	usage: "<Tag (가져갈돈)>",
    run: async (client, message) => {
        
        if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
        let args = message.content.split(" ").slice(1);
    
    let pUser = message.guild.member(message.mentions.users.get()) || message.guild.members.cache.get(args[0]) || message.author;
    
    if(!coins[pUser.id]){
        coins[pUser.id] = {
            coins: 0
        };
    }
    
    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;
    let uCoins = coins[message.author.id].coins;
    
    if(sCoins)
    
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
    if(cicic != Math.floor(cicic)) return message.reply(error3embed)
    if(cicic != Math.floor(cicic)) return message.react('692644452401020958');
    
    
    
    coins[pUser.id] = {
        coins: pCoins - parseInt(args[1])
    };
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    embed.setTitle("Pure Pay 개발자 출금!")
    embed.addField(`**출금한 현금**`, `${args[1]}원`)
    embed.addField(`**출금자명**`, `${message.author.toString()}`, true)
    embed.addField(`**예금주명**`, `**${pUser}**`, true)
    embed.setColor("#0052ce")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /돈제거 사용 > ${user.tag} > ${args[1]}원`)
    
    fs.writeFile("./Database/coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    });
    }
}