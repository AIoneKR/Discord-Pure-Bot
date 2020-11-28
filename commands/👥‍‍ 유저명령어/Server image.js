const Discord = require("discord.js");
const protects = require("../../Database/protects.json");

module.exports = {
    name: "서버이미지",
    category: "👥‍‍ 유저명령어",
    description: "서버이미지를 불러옵니다.",
    run: async (client, message, args) => {
		const gigi = client.guilds.cache.get(args[0]) || message.guild;
	if(!protects[gigi.id]){
	protects[gigi.id] = {
		protects: "falses"
	};
}
const protect = protects[gigi.id].protects;
	if (gigi.id === message.guild.id) {
        message.react('692644452220534857')
     const embed = new Discord.MessageEmbed()
     .setColor(0x00AE40)
     .setAuthor(`${gigi.name} 서버의 이미지를 불러왔습니다!`)
     .setTitle(`${message.author.tag}님이 요청하신 내용입니다!`)
        .setImage(gigi.iconURL({ size: 1024 }))
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed)
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버이미지 사용 > ${gigi.name}`)
    } else {
		if (protect === "trues") {
        message.react('692644452220534857')
     const embed2 = new Discord.MessageEmbed()
     embed2.setColor(0x00AE40)
     embed2.setAuthor(`${gigi.name} 서버의 이미지를 불러왔습니다!`)
     embed2.setTitle(`${message.author.tag}님이 요청하신 내용입니다!`)
        embed2.setImage(gigi.iconURL({ size: 1024 }))
        embed2.setTimestamp()
        embed2.setFooter(message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed2)
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버이미지 사용 > ${gigi.name}`)
		} else {
	  let embed3 = new Discord.MessageEmbed()
	embed3.setColor(0xff0d10)
	embed3.setTitle(`접근거부!`)
	embed3.setDescription("**서버가 비공개 되어있습니다!**")
	embed3.setTimestamp()
	embed3.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send(embed3)
   message.react('692644452401020958')
 }
}
}
}