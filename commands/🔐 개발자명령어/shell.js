const { MessageEmbed } = require("discord.js"),
    { exec } = require("child_process")

module.exports = {
    name: "콘솔",
    category: "🔐 개발자명령어",
	description: "콘솔",
    run: async (client, message, args, ops) => {
		if (message.author.id == process.env.dvr) {
        if (!args.join(" ")) return
		message.react('692644452220534857')

        exec(args.join(" "), (err, stdout, stderr) => {
            if (err) message.channel.send(new MessageEmbed().setTitle("콘솔").setColor(0xff0000).setDescription(`**Input: **\n\`\`\`sh\n${args.join(" ")}\n\`\`\`\n**Output: **\n\`\`\`sh\n${stderr.length > 1500 ? stderr.substr(0, 1500) : stderr}\n\`\`\``))
            else message.channel.send(new MessageEmbed().setTitle("콘솔").setColor(0x00ff00).setDescription(`**Input: **\n\`\`\`sh\n${args.join(" ")}\n\`\`\`\n**Output: **\n\`\`\`sh\n${stdout.length > 1500 ? stdout.substr(0, 1500) : stdout}\n\`\`\``))
			console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /콘솔 사용`)
		})
		} else {
		message.react('692644452401020958')
		let embed = new MessageEmbed()
		embed.setColor(0xff0d10)
		embed.setTitle(`Developer Permission ERROR!`)
		embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
		embed.setTimestamp()
		embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
		message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
		}
    }
}