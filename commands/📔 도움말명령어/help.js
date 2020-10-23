const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fs = require("fs");
const prefixes = require("../../Database/prefixes.json");

module.exports = {
    name: "도움말",
    aliases: ["help", "도움", "ehdnaakf", "ehdna", "도와줘", "도와", "헬프"],
    category: "📔 도움말명령어",
    description: "도움말을 보여줍니다",
    usage: "[명령어 이름]",
    run: async (client, message, args) => {
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}
function getAll(client, message) {
	if(!prefixes[message.author.id]){
        prefixes[message.author.id] = {
            prefixes: process.env.prefix
        };
    }
	const prefix = prefixes[message.author.id].prefixes;
    const embed = new MessageEmbed()
        .setColor("#59e7ff")

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\` - ${cmd.description}`)
            .join("\n");
    }

    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n\n" + `${category}`);
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /명령어 사용`)
	embed.setTitle("Pure 도움말")
	embed.setDescription("명령어 자세히 보기 : `" + prefix + "도움말 [도움말 이름]`" + "\n\n" + info)
	message.react('🇩')
	setTimeout(() => {
	message.react('🇲')
	}, 1000)
	setTimeout(() => { message.author.send(embed); }, 2000)
	return;
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `**${input.toLowerCase()}** 라는 명령어가 없습니다!\n`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    if (cmd.name) info = `**명령어 이름: ${cmd.name}**`;
	if (cmd.category) info += `\n**명령어 소속: \`\`${cmd.category}\`\`**`;
    if (cmd.aliases) info += `\n**다른 명령어: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}**`;
    if (cmd.description) info += `\n**명령어 설명: \`\`${cmd.description}\`\`**`;
    if (cmd.usage) {
        info += `\n**명령어 접두: \`\`${cmd.usage}\`\`**`;
        embed.setFooter(`Syntax: <> = 필수, [] = 선택`);
    }
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /명령어 사용 > ${cmd.name}`)
    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}
