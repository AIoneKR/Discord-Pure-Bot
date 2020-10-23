const Discord = require("discord.js");
const fs = require("fs");
const prefixes = JSON.parse(fs.readFileSync("./Database/prefixes.json", "utf8"));
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "추방",
    category: "🛡️ 관리명령어",
    description: "상대를 추방합니다.",
	usage: "<ID | Tag> [추방 사유]",
    run: async (client, message) => {
		        if(!prefixes[message.author.id]){
            prefixes[message.author.id] = {
                prefixes: process.env.prefix
            };
        }
		const prefix = prefixes[message.author.id].prefixes;
	  let args = message.content.split(" ").slice(1);
	let emojil = client.emojis.cache.get("691681971478462495")//로딩
	let emojil4 = client.emojis.cache.get("687558949976801336")//민증
	let emojil5 = client.emojis.cache.get("687558950266077206")//방패
	let args1 = message.content.split(" ").slice(2);
	var idd = args1.join(" ");
  if(message.member.permissions.has("KICK_MEMBERS")){
    const user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick(idd || '사유가 없습니다')
          .then(() => {
			  let embed = new Discord.MessageEmbed()
	 embed.setColor(0xff0d10)
	 embed.setTitle(`추방!`)
	 embed.setDescription(`${emojil}` + " 성공적으로 추방이 완료되었습니다.")
	 embed.addField(`${emojil4}` + ` user name`,
		`${user.tag}`, true)
	 embed.addField(`${emojil4}` + ` user ID`,
		`${user.id}`, true)
	 embed.addField(`${emojil5}` + ` 사유`,
	 idd || '사유가 없습니다')
	 embed.setTimestamp()
	 embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 setTimeout(function(){ message.channel.send({embed}) }, 1500)
	message.react('692644452220534857')
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /킥 사용 > ${user.tag}를 추방하였습니다`)
          })
          .catch(err => {
			  let embed = new Discord.MessageEmbed()
	 embed.setColor(0xff0d10)
	 embed.setTitle(`ERROR!`)
	 embed.setDescription("봇에게 추방권한이 없습니다!\n" + err)
	 embed.setTimestamp()
	 embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
	message.react('692644452401020958')
			console.error(err);
          });
      } else {
		  let embed = new Discord.MessageEmbed()
	 embed.setColor(0xff0d10)
	 embed.setTitle(`ERROR!`)
	 embed.setDescription("유저를 찾을수 없습니다!")
	 embed.setTimestamp()
	 embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
	message.react('692644452401020958')
      }
    } else {
		let embed = new Discord.MessageEmbed()
	 embed.setColor(0xff0d10)
	 embed.setTitle(`ERROR!`)
	 embed.setDescription("다시시도해주세요!")
	 embed.addField(`사용방법`,
	 prefix + `추방 (@맨션 or ID)`, true)
	 embed.setTimestamp()
	 embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
	message.react('692644452401020958')
    }
  } else {
	  let embed = new Discord.MessageEmbed()
	embed.setColor(0xff0d10)
	embed.setTitle(`Kick Permission ERROR!`)
	embed.setDescription("권한이 없습니다!\n**필요한 권한 : 추방 권한**")
	embed.setTimestamp()
	embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
	 message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
   message.react('692644452401020958')
 }
}
}