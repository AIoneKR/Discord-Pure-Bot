const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "블랙리스트제거",
    category: "🔐 개발자명령어",
    description: "블랙리스트에서 제거합니다.",
	usage: "<ID>",
    run: async (client, message, args) => {
        if(message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        if (message.author.id === process.env.dvr) {
            let args = message.content.split(" ").slice(1);
            let error61embed = new Discord.MessageEmbed()
            error61embed.setTitle("오류!")
            error61embed.addField(`**오류**`, `**공백이거나 알수없는 값입니다!**`)
            error61embed.setColor("#ff4c39")
            if(!args[0]) {
            message.reply(error61embed)
            message.react('692644452401020958')
            return;
        }
            if(args[0] != Math.floor(args[0])) {
            message.reply(error61embed)
            message.react('692644452401020958')
            return;
        }
            let user = client.users.cache.get(args[0]);
            message.react('692644452220534857')
        
            embed.setColor("#FFFFFA")
            embed.setTitle("블랙리스트 제거")
            embed.addField("Name", `${client.users.cache.get(args[0]).tag}`)
            embed.addField("ID", `${user.id}`)
            message.channel.send({embed})
			user.send(`You Removed from Bot Blacklist! 🗑️`)
            console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /블랙리스트 제거 사용 > ${user.tag}`)
        
            blacklists[user.id] = {
                blacklists: "falses"
            };
        
            fs.writeFile("./Database/blacklist.json", JSON.stringify(blacklists), (err) => {
                if (err) console.log(err)
            })
        } else {
            embed.setColor(0xff0d10)
            embed.setTitle(`Dev Permission ERROR!`)
            embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
            embed.setTimestamp()
            embed.setFooter(process.env.botname + process.env.v, client.user.displayAvatarURL())
             message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
            message.react('692644452401020958')
        }
}
}