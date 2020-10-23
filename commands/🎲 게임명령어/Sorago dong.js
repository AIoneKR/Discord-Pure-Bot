const Discord = require("discord.js");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "소라고동",
    category: "🎲 게임명령어",
    description: "질문에 대한 답변을 해줍니다.",
    run: async (client, message, args) => {
		if (!args) {
		return message.channel.send('질문을 적어주세요!');
		}
        let nember = ["안돼", "다시 한 번 물어봐.", "가만히 있어.", "다 안돼.", "절대 하지마.", "하면안돼.", "그래.", "생각좀 해봐.", "좋은 생각인것같니?", "그거 해봐."]
		let nember2 = nember[Math.floor(Math.random() * nember.length)];
        
        message.react('692644452220534857')
    let emojil = client.emojis.cache.get("691681971478462495")//로딩바
	message.channel.send("질문에 답변을 찾는중..." + `${emojil}`).then(message => {message.delete({ timeout: 1000, reason: 'delete' })})
     setTimeout(function(){ message.channel.send(nember2); }, 2000)
     console.log(`> ${message.guild.name} < ${message.author.tag} /주사위 사용`)
    }
}
