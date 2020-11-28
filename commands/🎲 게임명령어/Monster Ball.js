const Discord = require("discord.js");

module.exports = {
    name: "몬스터볼",
    category: "🎲 게임명령어",
    description: "랜덤으로 포켓몬을 잡습니다.",
    run: async (client, message, args) => {
    let pokemon1 = ["흥나숭","염버니","고릴타","피카츄","피츄","라이츄","파이리","꼬부기","거북왕","팽도리","어니부기","엠페르트","리자드","리자몽","버터플","단데기","캐터피","야돈","야도란","피존투","피존","구구","또가스","또도가스","기어르","기기어르","기기기어르","주리비얀","샤비","샤로다","수댕이","쌍검자비","대검귀","뚜꾸리","염무왕","파쪼옥","전튤라","비버니","비버통","잉어킹","갸라도스","슈레기","둥실라이드","한카리아스","에리본","시마사리","데덴네","한바이트","딥상어돈","토게데마루","데스니칸","악비아르","악비르","깜눈크","꼬마돌","데구리","알통몬","플러시","근육몬","괴력몬","마이농","잠만보","먹고자","따라큐","고오스","고오스트","팬텀","두더류","고래왕자","고래왕","사철록","타격귀","보르그","단골","쌔비냥","나옹이","염무왕","으랏차","뿔충이","딱충이","독침붕","꼬렛","레트라","거북손데스","조로아","조로아크","잡다가 죽은 포켓몬(?)","실수로 자신(?)","지우(?)","포켓몬 관장님(?)","몬스터볼(?)","포켓몬이 아닌것(?)"]
    pokemon = pokemon1[Math.floor(Math.random() * pokemon1.length)];
        message.react('692644452220534857')
        let emojil = client.emojis.cache.get("691681971478462495")//로딩바
	    message.channel.send("당신과 함께할 포켓몬을 잡고있습니다 " + `${emojil}`).then(message => {message.delete({ timeout: 1000, reason: 'delete' })})
        const embed = new Discord.MessageEmbed()
        embed.setColor(0xFFFFFC)
        embed.setTitle("몬스터볼")
        embed.setDescription(`**${message.author.tag}님이\n` + pokemon + `을(를) 잡으셨습니다.**`)
        embed.setTimestamp()
        embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
        setTimeout(function(){ message.channel.send({embed}); }, 1500)
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /몬스터볼 사용 > ${pokemon}`)
    }
}