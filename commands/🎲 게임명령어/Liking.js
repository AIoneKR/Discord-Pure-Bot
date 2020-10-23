const Discord = require("discord.js");

module.exports = {
    name: "호감도",
    category: "🎲 게임명령어",
    description: "호감도를 알려줍니다.",
	usage: "<1P> <2P>",
    run: async (client, message, args) => {
		try {
		let filter = (reaction, user) => (reaction.emoji.name === '🤔') && user.id === message.author.id
        const errorembed = new Discord.MessageEmbed()
        errorembed.setTitle("뇌가 아픈!")
        errorembed.addField(`**뇌가 오류**`, `**정확히 작성!**`)
        errorembed.setColor("#ff4c39")
        if(!args[0]) {
        message.channel.send(errorembed)
        message.react('692644452401020958')
        return;
		}
        if(!args[1]) {
        message.channel.send(errorembed)
        message.react('692644452401020958')
        return;
		}
		const user1 = message.mentions.users.first();
		const user2 = Array.from(message.mentions.users)[1][0]
		if(!user1) {
        message.channel.send(errorembed)
        message.react('692644452401020958')
        return;
		}
		if(!client.users.cache.get(user2)) {
        message.channel.send(errorembed)
        message.react('692644452401020958')
        return;
		}
		if(client.users.cache.get(user2) == user1) {
        message.channel.send(errorembed)
        message.react('692644452401020958')
        return;
		}
        message.react('692644452220534857')
		let making = ["■□□□□□□□□□ (1/10)", "■■□□□□□□□□ (2/10)", "■■■□□□□□□□ (3/10)", "■■■■□□□□□□ (4/10)", "■■■■■□□□□□ (5/10)", "■■■■■■□□□□ (6/10)", "■■■■■■■□□□ (7/10)", "■■■■■■■■□□ (8/10)", "■■■■■■■■■□ (9/10)", "■■■■■■■■■■ (10/10)"]
        if (process.env.dvr === user1.id) {
          mak = "■■■■■■■■■■ (10/10)";
        } else if (process.env.dvr === client.users.cache.get(user2).id) {
          mak = "■■■■■■■■■■ (10/10)";
        } else if (client.user.id === user1.id) {
          mak = "■■■■■■■■■■ (10/10)";
        } else if (client.user.id === client.users.cache.get(user2).id) {
          mak = "■■■■■■■■■■ (10/10)";
        } else {
		  mak = making[Math.floor(Math.random() * making.length)];
		}
        if (mak === "■□□□□□□□□□ (1/10)") {
		  let m1 = ["허헣... 좀더 노력해봐요..", "두분은 뭐하는 사이인가요..?", "이기능으로 사람을 사귀는건 아니죠?...\n||말도안되는 소리인거같아요.||", "이기능으로 사람을 사귀는 생각은 버리는것이 좋을것같아요..."]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■□□□□□□□□ (2/10)") {
		  let m1 = ["음... 좀 아닌거같군요 :thinking:", "이건 말이 필요없어요 :thinking:", "아는사람 맞나요?"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■□□□□□□□ (3/10)") {
		  let m1 = ["노력해봅시다...", "좀더 생각해봐요... :thinking:"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■□□□□□□ (4/10)") {
		  let m1 = ["어느정도?...", "뭐하냐?", "아쉽네요..허허||(영혼가출)||"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■□□□□□ (5/10)") {
		  let m1 = ["음.. 그냥 그럭저럭?", "그냥 두분 이야기 하는사이로 해요."]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■■□□□□ (6/10)") {
		  let m1 = ["올.. 조금만더!", "그냥 친구로 지냅시다...\n||그 친구 말구요!||"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■■■□□□ (7/10)") {
		  let m1 = ["오 운명인가요?\n||아닌거같군요...||", "서로 생각이 있나요?...\n||그 진실은 커플이면 알수있죠...||"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■■■■□□ (8/10)") {
		  let m1 = ["오오! 운명인건가요?\n||그래서 뭐할건데||", "조금만 노력하면 좋을것같아요!"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■■■■■□ (9/10)") {
		  let m1 = ["1칸만더!", "오 나쁘지않은걸요?"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        } else if (mak === "■■■■■■■■■■ (10/10)") {
		  let m1 = ["우와! 정말 운명인가봐요!\n||어쩌라고요||", "두분... 상대방의 마음을 알아가는것이 어떨까요?...\n||진짜 하는건 아니겠죠?...||", "두분 서버에서 ||커플 아니죠?||\n||이상한 생각하지마요||\n||이상한 생각하면 너는 쓰래기에요||"]
		  let m01 = m1[Math.floor(Math.random() * m1.length)];
          mak0 = m01
        }
        const embed = new Discord.MessageEmbed()
        embed.setColor("#00ff00")
        embed.setTitle(`매칭 결과`)
        embed.addField("**1P**", `**${user1.toString()}**`, true)
        embed.addField("**2P**", `**${client.users.cache.get(user2).toString()}**`, true)
		embed.addField("**호감도**", `**${mak}**`)
		embed.addField("**한마디**", `**${mak0}**`)
        embed.setThumbnail(`https://cdn.discordapp.com/attachments/679028593690542111/681480291696640000/download.png`)
        embed.setTimestamp()
        embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         const embed5 = new Discord.MessageEmbed()
         embed5.setColor("#fffffe")
         embed5.setTitle('매칭중...')
         embed5.addField("**주의 사항**", '**모두 랜덤입니다!**')
		 embed5.addField("**사용 방법**", '**밑 이모지를 눌러 확인할수있습니다!**')
		 const loading1 = await message.channel.send(embed5)
		 const embed6 = new Discord.MessageEmbed()
         embed6.setColor("#fffffe")
         embed6.setTitle('매칭성공!')
         embed6.addField("**주의 사항**", '**모두 랜덤입니다!**')
		 embed6.addField("**사용 방법**", '**밑 이모지를 눌러 확인할수있습니다!**')
		 console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /호감도 1P(${user1.tag}) 2P(${client.users.cache.get(user2).tag}) > ${mak}`)
		  loading1.edit(embed6).then((th) => {
		  th.react('🤔')
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '🤔') {
      th.edit(embed)
      th.reactions.removeAll()
			}
		  })
		})
	} catch(e) {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("오류!")
        error2embed.addField(`**오류**`, `**${e.message}**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
    }
}