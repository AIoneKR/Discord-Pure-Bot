const Discord = require('discord.js');
const base32 = require('base32');

module.exports = {
    name: "비밀",
	aliases: ["base", "code"],
    category: "🔍 검색명령어",
    description: "Base64 & Base32 으로 암호화 및 복호화 합니다.\nBase32는 한국어가 안됩니다.\n(추후 수정예정)",
	usage: "<TEXT>",
    run: async (client, message, args) => {
if (!args[0]) return message.channel.send('변환실패!')
let texts = args.join(" ");

let encoded64 = new Buffer.from(texts).toString('base64');
let decoded64 = new Buffer.from(texts, 'base64').toString();

let encoded32 = base32.encode(texts).toString();
let decoded32 = base32.decode(texts).toString();

let embed = new Discord.MessageEmbed()
embed.setTitle("Base64 & Base32")
embed.addField(`**Base64 Encode:**`, `**${String(encoded64).length > 1024 ? (String(encoded64).substring(0, 983) + "\n//And much more...") : (encoded64)}**`)
embed.addField(`**Base64 Decode:**`, `**${String(decoded64).length > 1024 ? (String(decoded64).substring(0, 983) + "\n//And much more...") : (decoded64)}**`)
embed.addField(`**Base32 Encode:**`, `**${String(encoded32).length > 1024 ? (String(encoded32).substring(0, 983) + "\n//And much more...") : (encoded32)}**`)
embed.addField(`**Base32 Decode:**`, `**${String(decoded32).length > 1024 ? (String(decoded32).substring(0, 983) + "\n//And much more...") : (decoded32)}**`)
embed.setColor("#ff4c39")
embed.setFooter("현제 본기능은 암호화 및 복호화시 느려터질수있습니다.")
embed.setTimestamp()
message.channel.send(embed);
console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /비밀 사용 > ${texts}`)
}
}