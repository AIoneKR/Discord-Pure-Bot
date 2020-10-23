const fs = require("fs");
const prefixes = require("../../Database/prefixes.json");
const premiums = require("../../Database/premiums.json");
const Discord = require('discord.js');

module.exports = {
    name: "프리미엄제거",
    category: "🔐 개발자명령어",
    description: "프리미엄제거를 합니다.",
	usage: "<서버 ID>",
    run: async (client, message, args) => {
	if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
    let gigi = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
	if(!prefixes[message.author.id]){
        prefixes[message.author.id] = {
            prefixes: process.env.prefix
        };
    }
    if(!premiums[message.author.id]){
        premiums[message.author.id] = {
            premiums: "falses"
        };
    }
	const prefix = prefixes[gigi.id].prefixes;
    let premium = premiums[gigi.id].premiums;
    
    if(!gigi) return;
    
    try {
    premiums[gigi.id] = {
        premiums: "falses"
    };

    let embed = new Discord.MessageEmbed()
    embed.setTitle("Premium Del!")
    embed.addField(`**유저 이름**`, gigi.tag)
    embed.setColor("#89ff3b")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /프리미엄제거 사용 > ${gigi.name}`)
    
	prefixes[gigi.id] = {
    prefixes: process.env.prefix
    };
	
    fs.writeFile("./Database/premiums.json", JSON.stringify(premiums), (err) => {
        if(err) console.log(err)
    });
    fs.writeFile("./Database/prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err)
    });
    } catch(e) {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**${e.message}**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
    }
}