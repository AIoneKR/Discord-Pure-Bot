const fs = require("fs");
const Discord = require('discord.js');
const premiums = require("../../Database/premiums.json");

module.exports = {
    name: "프리미엄추가",
    category: "🔐 개발자명령어",
    description: "프리미엄추가를 합니다.",
	usage: "<서버 ID>",
    run: async (client, message, args) => {
	if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
    let gigi = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    if(!premiums[gigi.id]){
        premiums[gigi.id] = {
            premiums: "falses"
        };
    }
    let premium = premiums[gigi.id].premiums;
    
    if(!gigi) return;
	
	if(args[1] == "1" || args[1] == "2" || args[1] == "3") {
		
          if (args[1] === "1") {
            premium1 = "실버 Premium";
          } else if (args[1] === "2") {
            premium1 = "골드 Premium";
          } else if (args[1] === "3") {
            premium1 = "다이아 Premium";
          }
    
    try {
    premiums[gigi.id] = {
        premiums: args[1]
    };

    let embed = new Discord.MessageEmbed()
    embed.setTitle("Premium Add!")
    embed.addField(`**유저 이름**`, gigi.tag)
    embed.addField(`**정보**`, premium1)
    embed.setColor("#89ff3b")
    message.channel.send({embed});
    message.react('692644452220534857')
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /프리미엄추가 사용 > ${gigi.name} > ${premium1}`)
    
    fs.writeFile("./Database/premiums.json", JSON.stringify(premiums), (err) => {
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
	} else {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**1=실버\n2=골드\n3=다이아**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
	}
    }
}