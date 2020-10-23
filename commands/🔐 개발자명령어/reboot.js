const { readdirSync } = require("fs"),
    { MessageEmbed } = require("discord.js")

module.exports = {
    name: "리로드",
    aliases: ["리붓"],
    category: "🔍 검색명령어",
	description: "모든 명령어를 리로드 합니다.",
    run: async (client, message, args, ops) => {
		if(message.author.id !== process.env.dvr) return message.react('692644452401020958')
        const embed = new MessageEmbed().setTitle(`${client.commands.size}개의 명령어를 리로드중...`).setColor(0x00ff00)
        const m = await message.channel.send(embed)

        readdirSync("./commands/").forEach(dir => {
            readdirSync(`./commands/${dir}`).filter(f => f.endsWith(".js")).forEach(file => {
                let pull = require(`../${dir}/${file}`)

                if (pull.name) {
                    delete require.cache[require.resolve(`../${dir}/${file}`)]
                    client.commands.set(pull.name, pull)
                }

                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(a => client.aliases.set(a, pull.name))
            })
        })
        
        m.edit(embed.setTitle(`✅ ${client.commands.size}개의 명령어가 리로드되었습니다!`))
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /리부팅 사용`)
    }
}