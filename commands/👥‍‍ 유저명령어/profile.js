const Discord = require("discord.js");

module.exports = {
    name: "프로필",
    category: "👥‍‍ 유저명령어",
    description: "유저의 프로필을 보여줍니다.",
	usage: "[Tag | ID]",
    run: async (client, message) => {
        let args = message.content.split(" ").slice(1);
         var idd = args.join(" ");
         let user = message.mentions.users.first() || client.users.cache.get(idd) || message.author;
         const embed = new Discord.MessageEmbed()
         .setColor(0x00AE40)
         .setAuthor("프로필을 불러옵니다!")
         .setTitle(`Name : ${user.tag}\nID : ${user.id}`)
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp()
            .setFooter("10초후 삭제됩니다.")
            message.channel.send(embed).then(message => {message.delete({ timeout: 10000, reason: 'delete' })})
             console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /프로필 사용 > ${user.tag}`)
	}
}