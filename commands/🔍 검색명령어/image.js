const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "이미지",
    category: "🔍 검색명령어",
    description: "랜덤으로 이미지를 전송합니다.",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl", "korea"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
		console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /랜덤 이미지 사용`)
}
}