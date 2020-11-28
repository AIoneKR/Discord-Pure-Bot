module.exports = {
    name: "재시작",
    aliases: ["리붓", "리로드"],
    category: "🔐 개발자명령어",
	description: "모든 명령어를 리로드 합니다.",
    run: async (client, message, args, ops) => {
        if (message.author.id !== '379775547838038028') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}