const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");
const prefixes = require("../../Database/prefixes.json");
const verifieds = require("../../Database/verified.json");
const moneys = require("../../Database/moneys.json");
const premiums = require("../../Database/premiums.json");

module.exports = {
    name: "유저정보",
    category: "👥‍‍ 유저명령어",
    description: "유저정보를 보여줍니다.",
	usage: "[Tag | ID]",
    run: async (client, message) => {
        if(message.author.bot) return;
    const args = message.content.split(" ").slice(1);
    var idd = args.join(" ");
    const user = message.mentions.users.first() || client.users.cache.get(idd) || message.author;
    message.react('692644452220534857')
    let emojil = client.emojis.cache.get("691681971478462495")//로딩
    let emojil3 = client.emojis.cache.get("682612640958513162")//사람
    let emojil4 = client.emojis.cache.get("687558949976801336")//민증
    let emojil5 = client.emojis.cache.get("687558950266077206")//방패
    let emojil6 = client.emojis.cache.get("687558950207619114")//쨈
    let emojil7 = client.emojis.cache.get("687558950538707036")//알람
    let emojil8 = client.emojis.cache.get("687558950421397509")//wifi
	
    const member = message.guild.member(user);
    let e0 = client.emojis.cache.get("692644452401020958")//X
    let e1 = client.emojis.cache.get("692644452220534857")//O
    let e2 = client.emojis.cache.get("687558949553307695")//bot
	
	let idle = client.emojis.cache.get("712692411586969621")
	let dnd = client.emojis.cache.get("712689340396077177")
	let online = client.emojis.cache.get("712689340798468138")
	let offline = client.emojis.cache.get("712689340588752976")
	
	if(!blacklists[user.id]){
        blacklists[user.id] = {
            blacklists: "falses"
        };
    }
	
	if(!prefixes[message.author.id]){
        prefixes[message.author.id] = {
            prefixes: process.env.prefix
        };
    }
	
    if(!premiums[user.id]){
        premiums[user.id] = {
            premiums: "falses"
        };
    }
	
		let premium = premiums[user.id].premiums;
          if (premium === "1") {
            premium1 = "실버 Premium";
          } else if (premium === "2") {
            premium1 = "골드 Premium";
          } else if (premium === "3") {
            premium1 = "다이아 Premium";
          } else if (premium === "falses") {
            premium1 = "Premium이 없습니다!";
          }
	
	let blacklist = blacklists[user.id].blacklists;
	let reason = blacklists[user.id].reasons;
	let prefix = prefixes[user.id].prefixes;
	
          if (user.bot === false) {
            botii = "봇이 아닙니다 " + `${e0}`;
          } else if (user.bot === true) {
            botii = "봇입니다 " + `${e2}`;
          }
          
          if (user.presence.status === "offline") {
            dd = "현제 기능이 작동하지 않습니다.";
		  //dd = `${offline}` + "오프라인";
          } else if (user.presence.status === "online") {
            dd = `${online}` + "온라인";
          } else if (user.presence.status === "dnd") {
            dd = `${dnd}` + "다른용무중";
          } else if (user.presence.status === "idle") {
            dd = `${idle}` + "자리비움";
          }
		  
		  if (blacklist === "falses") {
            blacklist11 = "블랙리스트에 등록되어있지않습니다 " + `${e0}`;
          } else if (blacklist === "trues") {
		    blacklist11 = "블랙리스트에 등록되어있습니다 " + `${e1}` + `\n` + `사유: ${reason}`;
          }

      const embed = new Discord.MessageEmbed()
     .setColor(0x0074AE)
     .setAuthor(user.tag, user.displayAvatarURL())
     .setTitle(`${emojil}` + ' 유저 Info')
     .setThumbnail(user.displayAvatarURL())
     .addField(`${emojil4}` + ` User`, `${user.tag || '확인 불가'}`, true)
     .addField(`${emojil4}` + ` User tag`, `${user.toString() || '확인 불가'}`, true)
     .addField(`${emojil5}` + ` ID`, `${user.id || '확인 불가'}`, true)
     .addField(`${emojil8}` + ` 상태`, `${dd || '확인 불가'}`, true)
	.addField(`${emojil6}` + ` 프리미엄`, `${premium1 || '확인 불가'}`, true)
	.addField(`${emojil4}` + ` 접두사`, `${prefix || '확인 불가'}`, true)
	.addField(`${emojil5}` + ` 블랙리스트 여부`, `${blacklist11 || '확인 불가'}`)
	.addField(`${emojil6}` + ` 상태 표시줄`, `확인 불가`)
     //.addField(`${emojil6}` + ` 상태 표시줄`, `${user.presence.activities || '게임중이 아닙니다.'}`)
     .addField(`${emojil7}` + ` 디스코드 계정 생성일`, `${moment(user.createdAt).format('LLLL') || '확인 불가'}`)
     .addField(`${emojil3}` + ` 봇여부`, `${botii || '확인 불가'}`, true)
     .addField(`${emojil6}` + ` 역할`, `${member.roles.cache.filter(n => n.id !== message.guild.id).map(n => n).join(', ') || '역할이 없습니다.'}`)
     .setFooter("30초후 삭제됩니다.")
     .setTimestamp()
     message.channel.send(embed).then(message => {message.delete({ timeout: 30000, reason: 'delete' })})
         console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /유저정보 사용 > ${user.tag}`)
	}
}