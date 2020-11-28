module.exports = {
    name: "주사위",
    category: "🎲 게임명령어",
    description: "1부터 6까지의 주사위를 랜덤으로 표시합니다.",
    run: async (client, message, args) => {
        let nember = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣"]
		let nember2 = nember[Math.floor(Math.random() * nember.length)];
        
        message.react('692644452220534857')
    let emojil = client.emojis.cache.get("691681971478462495")//로딩바
	message.channel.send("주사위 굴리는중 " + `${emojil}`).then(message => {message.delete({ timeout: 1000, reason: 'delete' })})
     setTimeout(function(){ message.channel.send(nember2); }, 2000)
     console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /주사위 사용`)
    }
}