const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");

module.exports = async (client, guild, message) => {
console.log(`┌─────────new server!!─────────`)
console.log(`│ 서버이름 : ${guild.name}`)
console.log(`│ 서버소유자 : ${guild.owner.user.tag}`)
console.log(`│ 서버고유번호 : ${guild.id}`)
console.log(`│ 서버유저수 : ${guild.memberCount} 명`)
console.log(`└──────────────────────────────`)

const embed = new Discord.MessageEmbed()
embed.setColor("#FFFFFA")
embed.setTitle(`Server invite!`)
embed.addField("**서버이름**", guild.name)
embed.addField("**서버소유자**", "**``" + guild.owner.user.tag + "``**", true)
embed.addField("**서버소유자 고유번호**", "**``" + guild.owner.user.id + "``**", true)
embed.addField("**서버고유번호**", "**``" + guild.id + "``**")
embed.addField("**서버유저수**", "**``" + guild.memberCount + "``**")
client.users.cache.get(process.env.dvr).send({embed})

const embed9090 = new Discord.MessageEmbed()
embed9090.setColor("#44ff7a")
embed9090.setThumbnail(client.user.displayAvatarURL())
embed9090.setTitle(`${guild.name} 서버에 ${client.user.username}를 초대해주셔서 감사합니다.`)
embed9090.addField(`**${client.user.username} 이용약관**`, `**[[${client.user.username} Terms of Service]](https://github.com/AIoneKR/Team-Leo-Discord-Bot/blob/master/Team%20Leo%20Tos.md)**`)
embed9090.addField(`**${client.user.username} 개인정보 이용약관**`, `**[[${client.user.username} Team Leo Privacy]](https://github.com/AIoneKR/Team-Leo-Discord-Bot/blob/master/Team%20Leo%20Privacy.md)**`)
embed9090.addField(`**${client.user.username} 개발자 서버**`, `**[[${client.user.username} Official Server 서포트 서버]](https://discord.gg/n2KUDk7)**`)
embed9090.addField(`**${client.user.username} 공식 웹사이트**`, `**[[공식 웹사이트]](https://teamleo.ga/)**`)
embed9090.addField(`**${client.user.username} 후원하기**`, `**은행명 : SC제일은행\n계좌번호 : 47116135897394**`)
client.users.cache.get(guild.ownerID).send(embed9090)
}
