const Discord = require("discord.js");

module.exports = {
    name: "초대링크생성",
    category: "👥‍‍ 유저명령어",
    description: "해당 봇의 초대링크를 만듭니다.",
    run: async (client, message, args) => {
	try {
    var idd = args.join(" ");
    const user1 = message.mentions.users.first() || client.users.cache.get(idd);
	if (user1.bot === true) {
	message.react('692644452220534857')
	const embed = new Discord.MessageEmbed()
     .setColor(0x0074AE)
     .setAuthor(user1.tag, user1.displayAvatarURL())
     .setTitle(`초대링크를 생성했어요!`)
     .addField(`Name`, `${user1.tag || '확인 불가'}`, true)
	.addField(`ID`, `${user1.id || '확인 불가'}`, true)
	.addField(`초대링크`, `https://discord.com/oauth2/authorize?client_id=${user1.id}&permissions=8&scope=bot` || '확인 불가')
     .setFooter(message.author.tag, message.author.displayAvatarURL())
     .setTimestamp()
	message.channel.send(embed)
     console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /초대링크생성 사용 > ${user1.tag}`)
	} else {
        let error1embed = new Discord.MessageEmbed()
        error1embed.setTitle("ERROR!")
        error1embed.addField(`**ERROR**`, `**ID가 올바르지 않거나 찾을수 없는 봇이에요!\n혹시 사람인가요? 사람은 초대링크를 생성할수없어요!**`)
        error1embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error1embed)
    }
    } catch(e) {
        let error2embed = new Discord.MessageEmbed()
        error2embed.setTitle("ERROR!")
        error2embed.addField(`**ERROR**`, `**입력하신 정보가 올바르지않습니다!**`)
        error2embed.setColor("#ff4c39")
        message.react('692644452401020958')
        return message.reply(error2embed)
    }
}
}