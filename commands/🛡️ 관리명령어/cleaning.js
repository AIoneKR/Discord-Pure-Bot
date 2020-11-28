const Discord = require("discord.js");

module.exports = {
    name: "청소",
    category: "🛡️ 관리명령어",
    description: "청소를 할수있습니다.",
	usage: "<숫자>",
    run: async (client, message) => {
    try {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
    let args = message.content.split(" ").slice(1);
    var wow = parseFloat(args[0]);
    let error3embed = new Discord.MessageEmbed()
    error3embed.setTitle("오류!")
    error3embed.addField(`**오류**`, `**정확히 입력해주세요!**`)
    error3embed.setColor("#ff4c39")
        error3embed.setTimestamp()
        error3embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
    if(wow != Math.floor(wow)) return message.reply(error3embed).then(message.react('692644452401020958'))
        let error1embed = new Discord.MessageEmbed()
        error1embed.setColor(0xff0d10)
        error1embed.setTitle(`ERROR!`)
        error1embed.addField("**오류**", `**100개 까지만 가능합니다!**`)
        error1embed.setTimestamp()
        error1embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
    if(100 < Math.floor(wow)) return message.reply(error1embed).then(message.react('692644452401020958'))
    message.channel.bulkDelete(args[0])
    message.react('692644452220534857')
    let embed = new Discord.MessageEmbed()
    embed.setColor(0xff0d10)
    embed.setTitle(`메시지 삭제`)
    embed.setDescription(`**메시지 ${args[0]}개가 삭제되었습니다**`)
    embed.setTimestamp()
    embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
    message.channel.send(embed).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
    console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /청소 사용 > ${args[0]}`)
    } else {
		let embed123 = new Discord.MessageEmbed()
        message.react('692644452401020958')
        embed123.setColor(0xff0d10)
        embed123.setTitle(`메시지 관리 Permission ERROR!`)
        embed123.setDescription("권한이 없습니다!\n**필요한 권한 : 메시지 관리 권한**")
        embed123.setTimestamp()
        embed123.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
        message.channel.send(embed123).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
    }
	} catch {
		 let embed = new Discord.MessageEmbed()
         embed.setColor(0xff0d10)
         embed.setTitle(`ERROR!`)
         embed.setDescription("봇에게 메시지 관리 권한이 없습니다!")
         embed.setTimestamp()
         embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
         message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
        message.react('692644452401020958')
    }
}
}