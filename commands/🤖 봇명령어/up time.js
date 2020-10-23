const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");

module.exports = {
    name: "업타임",
    category: "🤖 봇명령어",
    description: "봇의 가동시간을 알려줍니다.",
    run: async (client, message, args) => {
        message.react('692644452220534857')
        let emojil7 = client.emojis.cache.get("687558950538707036")//알람
		const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const embed = new Discord.MessageEmbed()
         .setColor(0x0045AE)
         .setTitle(`${emojil7}` + " 업타임!")
         .addField("**ONTIME**", `**${moment(client.readyAt).format('LLLL')}**`)
		 .addField("**UPTIME**", `**${duration}**`)
         .setThumbnail(`https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjZfMjcg/MDAxNTg1MTk3MTczMjc0._4GjfgfPfq1LM5jjULu_vGpxPxG_1lzr1uaQCHBdiOEg.hEKfH_HabjmYLGdD595z6bUiYz8jC8DZUOe9oFsv21Qg.PNG.namsangik21/rawingPicture_1585046735895.png?type=w800`)
         .setTimestamp()
         .setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /업타임 사용 > ${uptime}`)
    }
}