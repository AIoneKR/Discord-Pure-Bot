const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
    name: "ip",
    category: "🔍 검색명령어",
    description: "ip를 조회할수있습니다.",
	usage: "<Looked Up IP>",
    run: async (client, message, args) => {
            snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
                let Geo = new Discord.MessageEmbed()
                  .setTimestamp()
                  .setThumbnail(`https://image.ibb.co/kcFJ09/resolver.png`)
                  .setTitle(`**Deluxo Puller - GeoIP Lookup**`)
                  .setDescription(`**__GeoIP Lookup Information__**
              **Looked Up IP**: ${args}
              **ASN**: ${r.body.as}
              **City**: ${r.body.city}`)
                  .setFooter(`Resolved By: ${message.author.tag}`);
              
                message.channel.send({ embed: Geo });
              });
        console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /ip 사용`)
    }
}