const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "csay",
    category: "🔐 개발자명령어",
    description: "콘솔을 이용해 말을 할수있습니다.",
	usage: "<채널ID>",
    run: async (client, message, args) => {
        if (message.author.id !== process.env.dvr) return message.react('692644452401020958')
//console chatter
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
	client.channels.cache.get(`${args[0]}`).send(x.join(" "));
});
    let embed = new Discord.MessageEmbed()
    embed.setColor("#59e7ff")
    embed.setTitle(`say console`)
    embed.addField(`**채널설정**`, `**${client.channels.cache.get(args[0]).name}**`)
    embed.setTimestamp()
    embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
    message.channel.send(embed)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /csay 사용 > ${args[0]}`)
    }
}