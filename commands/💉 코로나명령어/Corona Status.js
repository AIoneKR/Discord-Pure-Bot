const Discord = require("discord.js");
const cheerio = require('cheerio');
const request = require('request');
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");

module.exports = {
    name: "코로나현황",
    aliases: ["현황", "코로나", "covid19", "covid"],
    category: "💉 코로나명령어",
    description: "실시간 코로나 현황을 불러옵니다.",
    run: async (client, message, args) => {
        let emojil = client.emojis.cache.get("687558949704040465")//종이
        let loading = new Discord.MessageEmbed()
          loading.setColor('RED')
          loading.setTitle('COVID-19(코로나) 현황을 가져오는중..');
        message.channel.send(loading).then((th) => {
        request('http://ncov.mohw.go.kr/', (err, res, html) => {
          const $ = cheerio.load(html);
          // const $data = $('body .wrap.nj .mainlive_container .container div .liveboard_layout .live_left');
          const $data = $('body .wrap.nj .mainlive_container .container div .liveboard_layout');
          const $data1 = $('body .wrap.nj .mainlive_container .container div .m_con_layout');
          // const date = $data.find('h2 .livedate').text().replace(/[()]/g, '');
          const date = $data.find('.liveNumOuter h2 a .livedate').text().replace(/[()]/g, '');
    
          // const $numData = $data.find('.liveNum .liveNum').children();
          const $numData = $data.find('.liveNumOuter .liveNum .liveNum').children();
    
          const numData = [];
          const beforeData = [];
          for (let i = 0; i < 4; i++) {
            numData[i] = $numData.eq(i).find('li .num').text().replace(/[^0-9,]/g, '');
            beforeData[i] = $numData.eq(i).find('li .before').text().replace(/[^-0-9]/g, '');
            if (beforeData[i] >= 0)
              beforeData[i] = `▲${beforeData[i]}`;
            else beforeData[i] = `▼${-beforeData[i]}`;
          }
    
          // const $inspectData = $data.find('.liveTest .info_core .suminfo').children();
          const $inspectData = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .info_core .suminfo').children();
          const inspectData = [];
          for (let i = 0; i < 3; i++) {
            inspectData[i] = $inspectData.eq(i).find('li .num').text().replace(/[^.0-9]/g, '');
          }
          
          const $NuuData = $data1.find('.m_newsarea .m_news .m_text_list').children();
          const NuuData = [];
          for (let i = 0; i < 25; i++) {
            NuuData[i] = $NuuData.eq(i).find('li a').text().replace(/[]/g, '');
          }
    
          const $NssData = $data1.find('.m_newsarea .m_fact .m_text_list').children();
          const NssData = [];
          for (let i = 0; i < 25; i++) {
            NssData[i] = $NssData.eq(i).find('li a').text().replace(/[]/g, '');
          }
          
          const $NlinData = $data1.find('.m_newsarea .m_news .m_text_list').children();
          const NlinData = [];
          for (let i = 0; i < 25; i++) {
            NlinData[i] = $NlinData.eq(i).find('li a').text().replace(/[]/g, '');
          }
          
          // const inspectMinus = $data.find('.liveTest .chart_d div .numinfo3 .num_rnum').text().split(' ')[0].replace(/[^0-9]/g, '');
          const inspectMinus = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .chart_d div .numinfo3 .num_rnum').text().split(' ')[0].replace(/[^0-9,]/g, '');
          const inspectMinus2 = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .chart_d div .numinfo3 .num_percentage').text().split(' ')[0].replace(/[]/g, '');
          
          const inspectData12 = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .chart_d div .numinfo2 .num_rnum').text().split(' ')[0].replace(/[^0-9,]/g, '');
          const inspectData2 = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .chart_d div .numinfo2 .num_percentage').text().split(' ')[0].replace(/[]/g, '');
          
          const inspectData3 = $data.find('.liveToggleOuter div .live_left .liveTest.main_box_toggle .chart_d div .numinfo1 .num_percentage').text().split(' ')[0].replace(/[]/g, '');
    
          const ckemURL = $data.find('.liveToggleOuter div .live_right.main_box_toggle .regional_patient_status_A .container.main_container .victory_korea ul li .a .img').text().split(' ')[0].replace(/[]/g, '');
    
          let embed98 = new Discord.MessageEmbed()
            embed98.setColor('RED')
            embed98.setTitle('COVID-19(코로나) 한국 현황')
            embed98.setURL("http://ncov.mohw.go.kr/")
            embed98.addField(':drop_of_blood: **확진환자**', `${numData[0]}명 (${beforeData[0]})`, true)
            embed98.addField(':green_heart: **완치(격리해제)**', `${numData[1]}명 (${beforeData[1]})`, true)
            embed98.addField(':skull: **사망자**', `${numData[3]}명 (${beforeData[3]})`, true)
            embed98.addField(':adhesive_bandage: **치료 중(격리 중)**', `${numData[2]}명 (${beforeData[2]})`, true)
            embed98.addField(':syringe: **누적 검사수**', `${inspectData[0]}명`, true)
            embed98.addField(':ok: **누적 검사완료수**', `${inspectData[1]}명`, true)
            embed98.addField(':test_tube: **검사중**', `${inspectData[0] - inspectData[1]}명 - ${inspectData3}%`, true)
            embed98.addField(':thermometer_face: **결과양성(확진)**', `${inspectData12}명 - ${inspectData2}%`, true)
            embed98.addField(':white_check_mark: **결과음성**', `${inspectMinus}명 - ${inspectMinus2}%`, true)
            embed98.addField(`${emojil}` + ' **누적 확진률**', `${inspectData[2]}%`, true)
            embed98.addField(':thinking: **핫이슈**', `• ${NuuData[2]}\n• ${NuuData[3]}\n[[자세히 보기]](http://ncov.mohw.go.kr/tcmBoardList.do?brdId=&brdGubun=&dataGubun=&ncvContSeq=&contSeq=&board_id=&gubun=)`)
            embed98.addField(':thumbsup: **코로나19 팩트체크**', `• ${NssData[0]}\n• ${NssData[1]}\n[[자세히 보기]](http://ncov.mohw.go.kr/factBoardList.do?brdId=3&brdGubun=33)`)
            embed98.setImage(ckemURL)
            embed98.setFooter(`${date} | 출처 : 질병관리본부 코로나19 홈페이지`, 'http://ncov.mohw.go.kr/static/image/header/ROK.png');
            console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /현황 사용`)
          th.edit(embed98);
        });
        });
    }
}