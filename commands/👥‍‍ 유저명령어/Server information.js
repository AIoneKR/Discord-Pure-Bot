const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");
const premiums = require("../../Database/premiums.json");
const protects = require("../../Database/protects.json");

module.exports = {
    name: "서버정보",
    category: "👥‍‍ 유저명령어",
    description: "서버정보를 보여줍니다.",
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
        if (gigi.explicitContentFilter === "DISABLED") {
            f = "미디어 콘탠츠를 스캔하지 않음";
          } else if (gigi.explicitContentFilter === "MEMBERS_WITHOUT_ROLES") {
            f = "역할 없는 멤버의 미디어 콘텐츠를 스캔함";
          } else if (gigi.explicitContentFilter === "ALL_MEMBERS") {
            f = "모든 멤버의 미디어 콘텐츠를 스캔함";
          }

          if (gigi.verificationLevel === "NONE") {
            verifylv = "없음";
          } else if (gigi.verificationLevel === "LOW") {
            verifylv = "낮음(Discord 이메일 인증 필요)";
          } else if (gigi.verificationLevel === "MEDIUM") {
            verifylv = "보통(Discord 이메일 인증 + 가입 5분 경과 필요)";
          } else if (gigi.verificationLevel === "HIGH") {
            verifylv =
              "높음(Discord 이메일 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
          } else if (gigi.verificationLevel === "VERY_HIGH") {
            verifylv =
              "매우 높음(DIscord 이메일, 휴대폰 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
          }
		  
		   if (gigi.mfaLevel === 0) {
            mfaLevels = "비활성화";
          } else if (gigi.mfaLevel === 1) {
            mfaLevels = "활성화";
          }
		  
          if (gigi.afkChannel === null) {
            afk = "잠수 채널 없음";
            afktime = 0;
          } else {
            afk = gigi.afkChannel;
            afktime = gigi.afkTimeout;
          }
		  
		   if (protect === "falses") {
            protectuuu = "비공개 🔒";
          } else if (protect === "trues") {
            protectuuu = "공개 🔓";
          }
    let emojil2 = client.emojis.cache.get("687558950148898826")//체크
    let emojil3 = client.emojis.cache.get("682612640958513162")//사람
    let emojil4 = client.emojis.cache.get("687558949976801336")//민증
    let emojil5 = client.emojis.cache.get("687558950266077206")//방패
    let emojil6 = client.emojis.cache.get("687558950207619114")//쨈
    let emojil7 = client.emojis.cache.get("687558950538707036")//알람
        const embed = new Discord.MessageEmbed()
embed.setTitle(`${gigi.name}` + " 서버 정보"|| 'None')
            embed.setColor(0x00ff00)
            embed.setThumbnail(gigi.iconURL() || 'https://cdn.discordapp.com/attachments/702037377945698356/705585655174135859/Discord.png')
            embed.addField(`${emojil4}` + " **서버 이름**", `**${`${gigi.name}` || 'None'}**`, true)
        embed.addField(`${emojil4}` + " **서버 ID**", `**${gigi.id || 'None'}**`, true)
		embed.addField(`${emojil5}` + " **서버 보호 여부**", `**${protectuuu || 'None'}**`)
			embed.addField(`${emojil6}` + " **서버 주인**", `**${gigi.owner.toString() || 'None'}**`)
            embed.addField(`${emojil2}` + " **서버 위치**", `**${gigi.region || 'None'}**`)
            embed.addField(`${emojil7}` + " **서버 생성일**", `**${moment(gigi.createdAt).format('LLLL') || 'None'}**`)
        embed.addField(`${emojil3}` + " **서버 인원 수 | 역할 갯수 | 채널 갯수**", `**${gigi.memberCount || 'None'}명 | ${gigi.roles.cache.size || 'None'}개 | ${gigi.channels.cache.size || 'None'}개**`)
            embed.addField(`${emojil5}` + " **서버 보안 수준**", `**${verifylv || 'None'}**`)
            embed.addField(`${emojil5}` + 
              " **서버 관리에 2단계 인증 필요 여부**",
              `**${mfaLevels}**`)
			embed.addField(`${emojil2}` + " **서버 잠수채널**", `**${afk || 'None'}**`, true)
            embed.addField(`${emojil3}` + " **서버 잠수 시간**", `**${afktime}초**`, true)
        embed.addField(`${emojil5}` + " **서버 메세지 필터 옵션**", `**${f || 'None'}**`)
            embed.setFooter("30초후 삭제됩니다.")
            embed.setTimestamp();
        message.channel.send(embed).then(message => {message.delete({ timeout: 30000, reason: 'delete' })})
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버정보 사용 > ${gigi.name}`)
    } else {
		if (protect === "trues") {
				message.react('692644452220534857')
        if (gigi.explicitContentFilter === "DISABLED") {
            f = "미디어 콘탠츠를 스캔하지 않음";
          } else if (gigi.explicitContentFilter === "MEMBERS_WITHOUT_ROLES") {
            f = "역할 없는 멤버의 미디어 콘텐츠를 스캔함";
          } else if (gigi.explicitContentFilter === "ALL_MEMBERS") {
            f = "모든 멤버의 미디어 콘텐츠를 스캔함";
          }

          if (gigi.verificationLevel === "NONE") {
            verifylv = "없음";
          } else if (gigi.verificationLevel === "LOW") {
            verifylv = "낮음(Discord 이메일 인증 필요)";
          } else if (gigi.verificationLevel === "MEDIUM") {
            verifylv = "보통(Discord 이메일 인증 + 가입 5분 경과 필요)";
          } else if (gigi.verificationLevel === "HIGH") {
            verifylv =
              "높음(Discord 이메일 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
          } else if (gigi.verificationLevel === "VERY_HIGH") {
            verifylv =
              "매우 높음(DIscord 이메일, 휴대폰 인증 + 가입 5분 경과 + 서버 참가 10분 경과 필요)";
          }
		  
		   if (gigi.mfaLevel === 0) {
            mfaLevels = "비활성화";
          } else if (gigi.mfaLevel === 1) {
            mfaLevels = "활성화";
          }
		  
          if (gigi.afkChannel === null) {
            afk = "잠수 채널 없음";
            afktime = 0;
          } else {
            afk = gigi.afkChannel;
            afktime = gigi.afkTimeout;
          }
		  
		   if (protect === "falses") {
            protectuuu = "비공개 🔒";
          } else if (protect === "trues") {
            protectuuu = "공개 🔓";
          }
    let emojil2 = client.emojis.cache.get("687558950148898826")//체크
    let emojil3 = client.emojis.cache.get("682612640958513162")//사람
    let emojil4 = client.emojis.cache.get("687558949976801336")//민증
    let emojil5 = client.emojis.cache.get("687558950266077206")//방패
    let emojil6 = client.emojis.cache.get("687558950207619114")//쨈
    let emojil7 = client.emojis.cache.get("687558950538707036")//알람
        const embed = new Discord.MessageEmbed()
embed.setTitle(`${gigi.name}` + " 서버 정보"|| 'None')
            embed.setColor(0x00ff00)
            embed.setThumbnail(gigi.iconURL() || 'https://cdn.discordapp.com/attachments/702037377945698356/705585655174135859/Discord.png')
            embed.addField(`${emojil4}` + " **서버 이름**", `**${`${gigi.name}` || 'None'}**`, true)
        embed.addField(`${emojil4}` + " **서버 ID**", `**${gigi.id || 'None'}**`, true)
		embed.addField(`${emojil5}` + " **서버 보호 여부**", `**${protectuuu || 'None'}**`)
			embed.addField(`${emojil6}` + " **서버 주인**", `**<@${client.guilds.cache.get("428497879989092362").ownerID || 'None'}>**`)
            embed.addField(`${emojil2}` + " **서버 위치**", `**${gigi.region || 'None'}**`)
            embed.addField(`${emojil7}` + " **서버 생성일**", `**${moment(gigi.createdAt).format('LLLL') || 'None'}**`)
        embed.addField(`${emojil3}` + " **서버 인원 수 | 역할 갯수 | 채널 갯수**", `**${gigi.memberCount || 'None'}명 | ${gigi.roles.cache.size || 'None'}개 | ${gigi.channels.cache.size || 'None'}개**`)
            embed.addField(`${emojil5}` + " **서버 보안 수준**", `**${verifylv || 'None'}**`)
            embed.addField(`${emojil5}` + 
              " **서버 관리에 2단계 인증 필요 여부**",
              `**${mfaLevels}**`)
			embed.addField(`${emojil2}` + " **서버 잠수채널**", `**${afk || 'None'}**`, true)
            embed.addField(`${emojil3}` + " **서버 잠수 시간**", `**${afktime}초**`, true)
        embed.addField(`${emojil5}` + " **서버 메세지 필터 옵션**", `**${f || 'None'}**`)
            embed.setFooter("30초후 삭제됩니다.")
            embed.setTimestamp();
        message.channel.send(embed).then(message => {message.delete({ timeout: 30000, reason: 'delete' })})
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서버정보 사용 > ${gigi.name}`)
		} else {
	  let embed = new Discord.MessageEmbed()
	embed.setColor(0xff0d10)
	embed.setTitle(`접근거부!`)
	embed.setDescription("**서버가 비공개 되어있습니다!**")
	embed.setTimestamp()
	embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed})
   message.react('692644452401020958')
 }
	}
}
}