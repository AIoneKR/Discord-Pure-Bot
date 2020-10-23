const request = require('request-promise');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
async function getRank(args) {
 
    let url = 'http://rank.search.naver.com/rank.js';
    let html;
    try {
        html = await request(url);
    } catch (e) {
        console.log("error");
        return "Error";
    }
    let json = JSON.parse(html);
    let jsonData = json.data[0].data
    const Rank_List = [];
    for (const key of jsonData) {
        Rank_List.push(`${key.rank}위 ${key.keyword}`);
    }
    const title = ('`네이버 실시간 급상승 TOP 20`');
    const Rank_Result = Rank_List.join('\n');
    const Result = Rank_Result;
    let description = Rank_List;
    return new MessageEmbed()
        .setTitle(title)
        .setDescription(description);
}
module.exports = {
    name: "실시간검색어",
	aliases: ["실검"],
    category: "🔍 검색명령어",
    description: "실시간검색어를 불러옵니다.",
    run: async (client, message, args) => {
        let result = null;
 
        if (!args.length) {
            result = new MessageEmbed()
                .setTitle('네이버 실시간 급상승')
                .setDescription('`%실검 실시간` 또는 `%실검 rank`');
        } else {
            switch (args[0]) {
                case '실시간':
                case 's':
                case 'rank':
                case 'stats':
                    result = await getRank(args);
                    break;
 
                default:
                    result = `\`${args[0]}\` 은(는) 알 수 없는 명령어 입니다.`;
                    break;
            }
        }
        message.channel.send(result);
	}
}