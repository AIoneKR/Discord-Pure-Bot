const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "say",
    category: "🔐 개발자명령어",
    description: "봇으로 말을 할수있습니다.",
	usage: "<할말>",
    run: async (client, message) => {
        if (message.author.id == process.env.dvr) {
        let args = message.content.split(" ").slice(1);
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /say 사용 > ${saytext}`)
			} else {
		message.react('692644452401020958')
		let embed = new Discord.MessageEmbed()
		embed.setColor(0xff0d10)
		embed.setTitle(`Developer Permission ERROR!`)
		embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
		embed.setTimestamp()
		embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
}
    }
}