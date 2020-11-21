const Discord = require("discord.js");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "공지",
    category: "🔐 개발자명령어",
    description: "봇이 입장해 있는 모든 서버에 공지를 전송합니다.",
	usage: "<보낼공지>",
    run: async (client, message, args) => {
        let filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '⭕') && user.id === message.author.id
        if (process.env.dvr.includes(message.author.id)) {
          let args = message.content.split(" ").slice(2);
		  let args1 = message.content.split(" ").slice(1);
          let mimi = args.join(" ")
          let reason = mimi
          let firstembed = new Discord.MessageEmbed()
          .setTitle(`${client.guilds.cache.size}개의 서버에 공지가 발신됩니다`)
          .addField(`공지의 내용은 다음과 같습니다`, `\`\`\`\n${reason}\n\`\`\``)
          .setColor("#FFFFFC")
          .setFooter('제공 - 오아시스 (iOas // Oasics#5074)')
          message.channel.send(firstembed).then((th) => {
            th.react('❌')
            th.react('⭕')
            th.awaitReactions(filter, {
              max: 1
            }).then((collected) => {
              if (collected.array()[0].emoji.name === '⭕') {
             let errors = ``
             client.guilds.cache.forEach(g => {
                  let reason = mimi
                  let gc
               g.channels.cache.forEach(c => {
                    let cname = `${c.name}`
                    if (cname.includes('📌│pure-공지사항') || cname.includes('pure-공지') || cname.includes('봇공지') || cname.includes('봇-공지')) {
                      if (!cname.includes('경고')) {
                        gc = `${c.id}`
                      }
                    }
                  })
                  let ann = new Discord.MessageEmbed()
                    .setTitle(args1[0])
                    .setDescription(`${reason}\n\n**===========================\n\n이 메시지는 키워드(📌│pure-공지사항, pure-공지, 봇공지, 봇-공지)가 포함된 채널에 발신되었습니다.\n\n[서포트서버 들어가기](https://discord.gg/n2KUDk7)\n[이용약관 보러가기](https://github.com/AIoneKR/Team-Leo-Discord-Bot/blob/master/Team%20Leo%20Tos.md)\n\n===========================**`)
                    .setColor("#FFFFFC")
                    .setFooter(`공지 발신자 : ${message.member.user.tag}`, message.author.avatarURL())
                    .setTimestamp()
                  let Ch = client.channels.cache.get(gc)
                  let ment
                  try {
                    if (!Ch.permissionsFor(g.me).has(`SEND_MESSAGES`)) {
                      ment = `${g.name} : 발신 실패 (메시지 발신 권한 없음)\n\n`
                    } else { Ch.send(ann) }
                  } catch (e) {
                    if (!g.me.hasPermission("MANAGE_CHANNELS")) {
                    ment = `${g.name} : 발신 실패 (채널 생성 권한 없음)\n\n`
                    } else {
                    ment = `${g.name} : 채널 자동 생성 및 발신 성공\n\n`
                    g.channels.create(`📌│pure-공지사항`).then(channel => {
                      channel.send(ann)
					  channel.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false });
                    })
                  }
                  } finally {
                    if (ment) { errors += ment }
                  }
                })
                if (errors === ``) { errors = '성공적으로 모든 서버에 발신되었습니다!' }
                let finalembed = new Discord.MessageEmbed()
                .setTitle('발신이 완료되었습니다!')
                .addField('결과:', `\`\`\`\n${errors}\`\`\``)
                .setColor("#FFFFFC")
                .setFooter('제공 - 오아시스 (iOas // Oasics#5074)')
                th.edit(finalembed)
              } else {
                let cemb = new Discord.MessageEmbed()
                .setTitle('공지 발신이 취소되었습니다')
                .setColor("#FFFFFC")
                .setFooter('제공 - 오아시스 (iOas // Oasics#5074)')
                th.edit(cemb)
              }
            })
          })
        } else {
         let nope = new Discord.MessageEmbed()
         .setTitle('당신은 봇 개발자로 등록되어있지 않습니다.')
             .setColor("#FFFFFC")
             .setFooter('제공 - 오아시스 (iOas // Oasics#5074)')
         message.channel.send(nope)
        }
    }
}