const Discord = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "통계",
    category: "🤖 봇명령어",
    description: "봇의 정확한 통계를 보여줍니다.",
    run: async (client, message) => {
let emojil2 = client.emojis.cache.get("687558950148898826")//체크
let emojil3 = client.emojis.cache.get("682612640958513162")//사람
let emojil4 = client.emojis.cache.get("687558949976801336")//민증
let emojil5 = client.emojis.cache.get("687558950266077206")//방패
let emojil6 = client.emojis.cache.get("687558950207619114")//쨈
let emojil7 = client.emojis.cache.get("687558950538707036")//알람
let count = 0
client.channels.cache.filter(channel => channel.type == 'voice').forEach(voice => count += voice.members.size)
const embed = new Discord.MessageEmbed()
embed.setTitle(`${client.user.tag} 통계 정보`)
embed.setColor(0x00ff00)
embed.addField(`Servers`, `${client.guilds.cache.size}`, true)
embed.addField(`Users`, `${client.users.cache.size}`, true)
embed.addField(`Channels`, `${client.channels.cache.size}`, true)
embed.addField(`Commands`, `${client.commands.size}`, true)
embed.setFooter(message.author.tag, message.author.avatarURL())
embed.setTimestamp();
message.channel.send({embed})
console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /통계 사용`)
    }
}