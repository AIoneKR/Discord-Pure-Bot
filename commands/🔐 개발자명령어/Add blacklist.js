const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "블랙리스트추가",
    category: "🔐 개발자명령어",
    description: "블랙리스트를 추가합니다.",
	usage: "<ID> [블랙리스트 사유]",
    run: async (client, message, args) => {
        if(message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        if (message.author.id === process.env.dvr) {
            let args = message.content.split(" ").slice(1);
            let error61embed = new Discord.MessageEmbed()
            error61embed.setTitle("오류!")
            error61embed.addField(`**오류**`, `**ID만 가능합니다!**`)
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
            let args1 = message.content.split(" ").slice(2);
            var blacklisttext = args1.join(" ");
            let user = client.users.cache.get(args[0]);
            message.react('692644452220534857')
            embed.setColor("#FFFFFA")
            embed.setTitle("블랙리스트 추가")
            embed.addField("Name", `${client.users.cache.get(args[0]).tag}`)
            embed.addField("ID", `${user.id}`)
            embed.addField("사유", "**```" + `${blacklisttext || '사유가 지정되지 않음'}` + "```**")
            message.channel.send({embed})
			user.send(`You Bot blacklisted! ⚠️ Reason : ${blacklisttext || '사유가 지정되지 않음'}`)
            console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /블랙리스트 추가 사용 > ${user.tag} > 사유 : ${blacklisttext || '사유가 지정되지 않음'}`)
        
            blacklists[user.id] = {
                blacklists: "trues",
                reasons: blacklisttext || '사유가 지정되지 않음'
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