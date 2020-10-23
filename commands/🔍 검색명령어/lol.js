const request = require('request-promise');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');

async function getStat(args) {
    if (args.length < 2) {
        return '`%롤 <소환사명>` 형식으로 사용해주세요';
    }
    // console.log(args);
 
    const search = args.slice(1, args.length).join(' ');
    // console.log(search);
 
    let url = 'https://www.op.gg/summoner/userName=' + encodeURIComponent(search);
    let options = {
        url: url,
        method: 'GET',
        headers: {
            'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) Gecko/20100101 Firefox/72.0'
        }
    }
 
    let html;
    try {
        html = await request(options); // html 받아옴
    } catch (e) {
        console.log("error");
        return "error";
    }
 
    var $ = cheerio.load(html); // 파싱
    let RankType, RankType_text;
    let TireRank, TireRank_text;
    let Wins, Wins_text;
    let Losses, Losses_text;
    let Winratio, Winratio_text;
    let Ranking, Ranking_text;
    let LeagueName, LeagueName_text;
 
    $('.RankType').each(function() { // 추출
        RankType = $(this);
        RankType_text = RankType.text();
        if (RankType_text == "Ranked Solo") {
            // console.log("솔로랭크");
            RankType_text = "솔랭";
        }
        //console.log(RankType_text);
    })
    $('.TierRank').each(function() {
        TireRank = $(this);
        TireRank_text = TireRank.text();
        // console.log(TireRank_text);
    })
    $('.wins').each(function() {
        Wins = $(this);
        Wins_text = Wins.text();
        //console.log(Wins_text);
    })
    $('.losses').each(function() {
        Losses = $(this);
        Losses_text = Losses.text();
        //console.log(Losses_text);
    })
    $('.winratio').each(function() {
        Winratio = $(this);
        Winratio_text = Winratio.text();
        //console.log(Winratio_text);
    })
    $('.ranking').each(function() {
        Ranking = $(this);
        Ranking_text = Ranking.text();
        //console.log(Ranking_text);
    })
    $('.LeagueName').each(function() {
        LeagueName = $(this);
        LeagueName_text = LeagueName.text();
        //console.log(LeagueName_text);
    })
 
    let lol_photo = $('.Medal.tip img').attr('src');
    if (lol_photo == undefined) {
        console.log("UnRank Err.");
        return (search + ' 유저 : `Unranked`');
    }
    //await RankType_text;
    var LOL_Result = RankType_text + " : `" + TireRank_text + "`\n" + "순위 : `" + Ranking_text + "위`\n" + Wins_text + " / " + Losses_text + ' / ' + Winratio_text;
    var LOL_Result_2 = (LOL_Result + LeagueName_text);
    const title = ('`' + search + '`의 `프로필`');
    let description = LOL_Result_2;
    let image = ('http:' + lol_photo);
    // console.log(image);
    // console.log(title);
    return new MessageEmbed() // 리턴 끝
        .setTitle(title)
        .setDescription(description)
        .setThumbnail(image);
}
 
// --------------------------------------------------------------- 
 
async function Profile(args) {
    if (args.length < 2) {
        return '`%롤 <소환사명>` 형식으로 사용해주세요';
    }
    // console.log(args);
 
    const search = args.slice(1, args.length).join(' ');
    // console.log(search);
 
    let url = 'https://www.op.gg/summoner/userName=' + encodeURIComponent(search);
    let options = {
        url: url,
        method: 'GET',
        headers: {
            'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) Gecko/20100101 Firefox/72.0'
        }
    }
 
    let html;
    try {
        html = await request(options); // html 받아옴
    } catch (e) {
        console.log("error");
        return "error";
    }
 
    var $ = cheerio.load(html); // 파싱
    let Level, Level_text;
 
    $('.Level.tip').each(function() {
        Level = $(this);
        Level_text = Level.text();
        // console.log(LeagueName_text);
    })
 
    let lol_profile = $('.ProfileIcon img').attr('src');
    if (lol_profile == undefined) {
        console.log("User Erorr.");
        return (search + ' `유저를 찾을수 없음.`');
    }
    //await RankType_text;
    var LOL_Result = "레벨 : " + Level_text + "Lv";
    const title = (search + '의 `프로필`');
    let description = LOL_Result;
    let image = ('http:' + lol_profile);
    const user_url = url;
    // console.log(image);
    // console.log(title);
    return new MessageEmbed() // 리턴 끝
        .setTitle(title)
        .setDescription(description)
        .setThumbnail(image)
        .setURL(user_url);
}
 
// --------------------------------------------------------
 
async function Recent(args) {
    if (args.length < 2) {
        return '`%롤 <소환사명>` 형식으로 사용해주세요';
    }
    // console.log(args);
 
    const search = args.slice(1, args.length).join(' ');
    // console.log(search);
 
    let url = 'https://www.op.gg/summoner/userName=' + encodeURIComponent(search);
    let options = {
        url: url,
        method: 'GET',
        headers: {
            'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) Gecko/20100101 Firefox/72.0'
        }
    }
 
    let html;
    try {
        html = await request(options); // html 받아옴
    } catch (e) {
        console.log("error");
        return "error";
    }
 
    var $ = cheerio.load(html); // 파싱
    let WinRatioTitle, WinRatioTitle_text;
    let test1, test2, test3, test5, test6;
    let WinRatioTitle_Result;
    let Win_Count;
 
    $('.WinRatioTitle').each(function() {
        WinRatioTitle = $(this);
        WinRatioTitle_text = WinRatioTitle.text();
        test1 = WinRatioTitle_text.split('\n')[1];
        test2 = WinRatioTitle_text.split('\n')[2];
        test3 = WinRatioTitle_text.split('\n')[3];
        test5 = test1 + test2 + test3;
        Win_Count = test2.replace(/[^0-9]/g, "");
        //console.log(Win_Count);
        WinRatioTitle_Result = test5.replace(/(^\s*)|(\s*$)/g, "");
        //WinRatioTitle_Result = test.replace(/(\s*)/g, "");
    })
 
    let lol_profile = $('.ProfileIcon img').attr('src');
    if (lol_profile == undefined) {
        console.log("User Erorr.");
        return ("`" + search + "`" + ' 라는 유저를 찾을수 없음.');
    }
    //await RankType_text;
    var LOL_Result = "최근 20게임 : " + WinRatioTitle_Result;
    var LOL_Ratio_Result = LOL_Result + "\n" + "승률 : " + (Win_Count * 5) + "%";
    const title = (search + '의 `프로필`');
    let description = LOL_Ratio_Result;
    let image = ('http:' + lol_profile);
    const user_url = url;
    // console.log(image);
    // console.log(title);
    return new MessageEmbed() // 리턴 끝
        .setTitle(title)
        .setDescription(description)
        .setThumbnail(image)
        .setURL(user_url);
}
 
// ------------------------------------------------------------
 
module.exports = {
    name: "롤",
	aliases: ["롤전적"],
    category: "🔍 검색명령어",
    description: "롤전적을 검색합니다",
    usage: "<유저 이름>",
    run: async (client, message, args) => {
        let result = null;
 
        // bs
        if (!args.length) {
            result = new MessageEmbed()
                .setTitle('롤 전적 검색기')
                .setDescription('`%롤 <명령어>`')
                .addField('프로필 정보', '`%롤 프로필 <소환사명>` 또는 `%롤 p <소환사명>`')
                .addField('랭크 정보', '`%롤 솔랭 <소환사명>` 또는 `%롤 s <소환사명>`')
                .addField('최근 정보', '`%롤 최근 <소환사명>` 또는 `%롤 r <소환사명>`');
        }
 
        // lol <command>
        else {
            switch (args[0]) {
                // lol s
                // lol stat
                // lol stats
                case '솔랭':
                case 's':
                case 'stat':
                case 'stats':
                    result = await getStat(args);
                    break;
 
                case '프로필':
                case 'p':
                case 'profile':
                    result = await Profile(args);
                    break;
 
                case '최근':
                case 'r':
                case 'recent':
                    result = await Recent(args);
                    break;
 
                    // lol ...
                default:
                    result = `\`${args[0]}\` 은(는) 알 수 없는 명령어 입니다.`;
                    break;
            }
        }
	message.channel.send(result);
	}
}