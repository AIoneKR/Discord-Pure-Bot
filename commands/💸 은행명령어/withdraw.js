const Discord = require('discord.js');
const fs = require("fs");
const moneys = require("../../Database/moneys.json");
const coins = require("../../Database/coins.json");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "출금",
    category: "💸 은행명령어",
    description: "통장에서 돈을 출금합니다.",
	usage: "<출금할돈>",
    run: async (client, message) => {
        
		let args = message.content.split(" ").slice(1);
			let error0embed = new Discord.MessageEmbed()
	error0embed.setTitle("오류!")
	error0embed.addField(`**오류**`, `**돈이없습니다!**`)
	error0embed.addField(`**통장**`, `**${coins[message.author.id].coins}원**`)
	error0embed.setColor("#ff4c39")
	if(!coins[message.author.id] || coins[message.author.id].coins <= 0) return message.reply(error0embed).then(message.react('692644452401020958'))
    if(!moneys[message.author.id]){
        moneys[message.author.id] = {
            moneys: 0
        };
    }
	
	if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }
    
    let smoneys = moneys[message.author.id].moneys;
    let ucoins = coins[message.author.id].coins;
	
    let error3embed = new Discord.MessageEmbed()
    error3embed.setTitle("오류!")
    error3embed.addField(`**오류**`, `**정확히 입력해주세요!**`)
    error3embed.setColor("#ff4c39")
	if(!args[0]) return message.reply(error3embed).then(message.react('692644452401020958'))
	if(args[0].includes("-")) return message.reply(error3embed).then(message.react('692644452401020958'))
	if(args[0].toLowerCase() == "모두") args[0] = coins[message.author.id].coins;
	var cicic = parseFloat(args[0]);
	if(cicic != Math.floor(cicic)) return message.reply(error3embed).then(message.react('692644452401020958'))

    let error4embed = new Discord.MessageEmbed()
    error4embed.setTitle("오류!")
    error4embed.addField(`**오류**`, `**통장에 잔액이 없습니다!**`)
    error4embed.addField(`**통장**`, `**${coins[message.author.id].coins}원**`)
    error4embed.setColor("#ff4c39")
    if(coins[message.author.id].coins < cicic) return message.reply(error4embed).then(message.react('692644452401020958'))
    
    moneys[message.author.id] = {
        moneys: smoneys + parseInt(args[0])
    };
    
    coins[message.author.id] = {
        coins: ucoins - parseInt(args[0])
    };
    let embed = new Discord.MessageEmbed()
    embed.setTitle("Pure Pay 출금!")
    embed.addField(`**출금한 현금**`, `**${args[0]}원**`)
	embed.addField(`**현재 통장**`, `**${Math.floor(ucoins - args[0])}원**`)
    embed.setColor("#0052ce")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /돈넣기 사용 > ${args[0]}원`)
    
    fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
        if(err) console.log(err)
    });

    fs.writeFile("./Database/coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    });
    }
}