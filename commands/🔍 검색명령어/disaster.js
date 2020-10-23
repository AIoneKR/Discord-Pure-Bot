const { MessageEmbed } = require("discord.js"),
    fetch = require("node-fetch")

module.exports = {
    name: "안전재난문자",
	aliases: ["재난문자"],
    category: "🔍 검색명령어",
	description: "재난문자를 불러옵니다.",
    run: async (client, message, args, ops) => {
        const res = await fetch("http://m.safekorea.go.kr/idsiSFK/neo/ext/json/disasterDataList/disasterDataList.json").then(e => e.json()).then(e => e.slice(0, 5).map(a => `${a.CONT} (${a.SJ})`).join('\n\n'))
        
        message.channel.send(new MessageEmbed().setTitle("재난 문자").setColor("#E7A5D6").setDescription(res).setTimestamp().setFooter("1분후 삭제됩니다.", client.user.avatarURL())).then(message => {message.delete({ timeout: 60000, reason: 'delete' })})
		
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /재난문자 사용`)
    }
}