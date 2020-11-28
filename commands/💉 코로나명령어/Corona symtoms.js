const Discord = require("discord.js");

module.exports = {
    name: "증상",
    category: "💉 코로나명령어",
    description: "코로나의 증상을 알려줍니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle("COVID-19(코로나) 증상")
         .addField('**증상 정보**', `**코로나19 감염 시의 증상은 사람마다 다릅니다.\n대부분의 감염자가 경증에서 중증 수준의 증상을 보이며 입원 없이 회복합니다.\n\n공통적인 증상은 다음과 같습니다.\n•발열\n•마른기침\n•피로감\n\n드물지만 다음과 같은 증상이 나타날 수도 있습니다.\n•몸살\n•인후통\n•설사\n•결막염\n•두통\n•미각 또는 후각 상실\n•피부 발진, 손가락 또는 발가락 변색\n\n심각한 증상은 다음과 같습니다.\n•호흡 곤란 또는 숨 가쁨\n•가슴 통증 또는 압박감\n•언어 또는 운동 장애\n\n심각한 증상이 있다면 즉시 의료진의 도움을 받으세요.\n의사를 보러 가거나 의료기관을 방문하기 전에 항상 미리 연락을 취하세요.\n\n다른 건강상 불편이 없는 경증 환자는 자택에서 증상을 관리해야 합니다.\n\n바이러스 감염 후 증상이 나타날 때까지 평균 5~-6일이 걸리지만 최대 14일이 소요될 수도 있습니다.**`)
         .setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681500701356064772/3c22f1dc6c8cb6bb754b5e5c36ca3ef2.jpg`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /증상 사용`)
    }
}