const Discord = require("discord.js");
const process = require('process');
const os = require('os');

module.exports = async(client) => {
	const moment = require('moment');
	moment.locale('ko');
  console.log(`┌───────${client.user.username} Bot Start!───────`)
  console.log(`│`)
  console.log(`├──────────join server──────────`)
  console.log(`│ • ${client.guilds.cache.map(r => r).join("\n│ • ")}`)
  console.log(`├──────────────────────────────`)
  console.log(`│`)
  console.log(`├────────${client.user.username} info────────`)
  console.log(`│ Name : ${client.user.tag}`)
  console.log(`│ ID : ${client.user.id}`)
  console.log(`│ Bot 버전 : ${process.env.v}`)
  console.log(`│ Discord.js 버전 : v${Discord.version}`)
  console.log(`│ Node.js 버전 : ${process.version}`)
  console.log(`│ CPU : ${os.cpus()[0].model}`)
  console.log(`│ Platform : ${os.platform()}`)
  console.log(`│ ARCH : ${process.arch}`)
  console.log(`│ Ping API : ${Math.round(client.ws.ping)}ms`)
  console.log(`├──────────────────────────────`)
  console.log(`│ 서버 : ${client.guilds.cache.size}`)
  console.log(`│ 사용자 : ${client.users.cache.size}`)
  console.log(`│ 채팅채널 : ${client.channels.cache.size}`)
  console.log(`└──────────────────────────────`)

    const botgame = [`Use %도움말 | %help`, `Version | ${process.env.v}`, `코로나19 종식! 모두를 응원합니다!`, `${client.users.cache.size}명 | ${client.guilds.cache.size}서버에서 사용`]
  //const botgame = [`Use %도움말 | %help`, `Version | ${process.env.v}`, `코로나19 종식! 모두를 응원합니다!`, `${client.users.cache.size}명 | ${client.guilds.cache.size}서버에서 사용`]
    setInterval(() => {
        const activity = botgame[Math.floor(Math.random() * botgame.length)]
        client.user.setActivity(activity, { type: "STREAMING", url: "https://www.twitch.tv/lehw8432" })
      }, 5500)
        //LISTENING : 듣는중
        //PLAYING : 하는중
        //STREAMING : 스트리밍
        //WATCHING : 보는중
        //CUSTOM_STATUS : 커스텀
        client.user.setStatus('online')
        //online : 온라인
        //idle : 자리비움
        //dnd : 다른 용무 중
      //.then(console.log)
      //.catch(console.error);
    
    /*//점검용
        const botgame = [`점검중 | 00시 00분 까지`]
        setInterval(() => {
        const activity = botgame[Math.floor(Math.random() * botgame.length)]
        client.user.setActivity(activity)
      }, 6000)
          client.user.setStatus('idle')*/
};