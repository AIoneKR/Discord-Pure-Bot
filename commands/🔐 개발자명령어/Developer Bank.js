const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../../Database/coins.json");
const moneys = require("../../Database/moneys.json");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "개발자은행",
    category: "🔐 개발자명령어",
    description: "다른유저의 은행정보를 봅니다.",
	usage: "<Tag | ID>",
    run: async (client, message, args) => {
        
        if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
		let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
		let e0 = client.emojis.cache.get("692644452401020958")//X
		let e1 = client.emojis.cache.get("692644452220534857")//O
		if(!coins[user.id]){
        coins[user.id] = {
            coins: 0
        };
    }
	    if(!moneys[user.id]){
        moneys[user.id] = {
            moneys: 0
        };
    }
	
        let uCoins = coins[user.id].coins;
		let umoneys = moneys[user.id].moneys;
	
		if (umoneys < 0) {
          cade = "신용불량 " + `${e0}`;
        } else if (umoneys > 0) {
          cade = "신용정상 " + `${e1}`;
        } else if (umoneys = "0") {
          cade = "신용정상 " + `${e1}`;
        }
        let embed = new Discord.MessageEmbed()
        message.react('692644452220534857')
        embed.setTitle(user.tag + "님의 은행정보!")
        embed.setColor("#0052ce")
        embed.addField(" **은행명**", `**Bisa**`);
		embed.addField(" **신용정보**", `**${cade}**`);
        embed.addField(" **지갑**", `**${umoneys}원**`, true);
		embed.addField(" **통장**", `**${uCoins}원**`, true);
        message.channel.send({embed})
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /은행 개발자 사용 > ${user.tag}`)
    }
}