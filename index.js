const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const moment = require('moment');
const Duration = require('humanize-duration');
const fetch = require('node-fetch');
const used = new Map();
const used1 = new Map();

const prefixes = require("./Database/prefixes.json");
const verifieds = require("./Database/verified.json");
const moneys = require("./Database/moneys.json");
const premiums = require("./Database/premiums.json");
const blacklists = require("./Database/blacklist.json");
const coins = require("./Database/coins.json");
const protects = require("./Database/protects.json");

const active = new Map()

const DBL = require("dblapi.js");

const client = new Client({
    disableEveryone: true
});

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzM4MTI5MTY2NjE3ODA1OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg4NTU3NzQwfQ.bL8QfinS-8iRFmV2RNFmo8rn4zB22TC-o8uAFF4-u8c', client);

setInterval(() => {
    dbl.postStats(client.guilds.cache.size);
}, 1800000);

dbl.on('posted', () => {
console.log('[ DBL ] Connected to server');
})

dbl.on('error', e => {
console.log(`[ DBL ] Server Error : ${e}`);
})

client.on("ready", async ready => {
let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzM4MTI5MTY2NjE3ODA1OCIsImlhdCI6MTU4ODYwMTI2MCwiZXhwIjoxNjIwMTU4ODYwfQ.HqB1OWLNamYk9yq4wuXi4hpoZIipbQTsG-twqR4gbY6dgA0Zsp_7oDkKrs9oGjMwyy-3rY_OHIiqrNKiTBdF4Kln1UvovQrj-Ogdo5kM1ZDuTwVSqtFTvXGhH7kZ3HFNysy3E0FEdRiBXkHuexUNo7fQv6mOJstd5kUChq4s43s"


res = await fetch("https://api.koreanbots.dev/bots/servers", {
    method: "POST",
    headers: { token, "Content-type": "application/json" },
    body: `{ "servers": "${client.guilds.cache.size}" }`
}).then(res => res.json())
console.log(res)
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

config({
    path: __dirname + "/.env"
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      const eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

client.on("message", async message => {
	if(message.channel.type === "dm") {
	if(message.content.startsWith("문상")) {
		let args = message.content.split(" ").slice(1);
		let rembed = new Discord.MessageEmbed()
        rembed.setTitle("Error")
        rembed.addField(`**오류**`, `**정확히 입력해주세요!\n\n지류(종이) 문화상품권: 1234-1234-1234-123456 숫자 18자리\n모바일 문화상품권: 1234-1234-1234-1234 숫자 16자리\n컬쳐랜드 PIN: 1234-1234-1234-123456 숫자 18자리**`)
        rembed.setColor("#ff4c39")
        if(!args[0]) {
        message.author.send(rembed).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
        message.react('692644452401020958')
        return;
        }
		let embed = new Discord.MessageEmbed()
        embed.setTitle("문상 후원 완료")
		embed.setDescription("문상 확인이 완료되면 DM으로 확인메시지가 전송됩니다.")
		embed.addField(`**전송된 코드**`, `**${args[0]}**`)
        embed.setColor("#44ff7a")
		message.author.send(embed)
		console.log(`${message.author.tag} (${message.author.id}) /문상 사용`)
		let aiembed = new Discord.MessageEmbed()
		aiembed.setTitle(`${message.author.tag} 문상 후원`)
        aiembed.addField("**후원자 정보**", "**``" + `Name : ${message.author.tag}\nID : ${message.author.id}` + "``**")
        aiembed.addField("**후원 시간**", `**${moment().format('LLLL')}**`)
		aiembed.addField(`**문상 코드**`, `**${args[0]}**`)
        aiembed.setColor("#44ff7a")
		client.users.cache.get(process.env.dvr).send(aiembed)
	}
	}
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

	if(!verifieds[message.author.id]){
	verifieds[message.author.id] = {
		verifieds: "falses"
	};
}
let verified = verifieds[message.author.id].verifieds;

if(!prefixes[message.author.id]){
        prefixes[message.author.id] = {
            prefixes: process.env.prefix
        };
    }
const prefix = prefixes[message.author.id].prefixes;

if(!blacklists[message.author.id]){
	blacklists[message.author.id] = {
		blacklists: "falses"
	};
}

let blacklist = blacklists[message.author.id].blacklists;
let reason = blacklists[message.author.id].reasons;
if(blacklist == "falses") {
if(verified === "trues") {
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }
	    if(!moneys[message.author.id]){
        moneys[message.author.id] = {
            moneys: 0
        };
    }
    let coinAmt = Math.floor(Math.random() * 20) + 20;
    let baseAmt = Math.floor(Math.random() * 20) + 20;
    if(coinAmt === baseAmt){
	if(message.author.bot) return;
	moneys[message.author.id] = {
		moneys: moneys[message.author.id].moneys + coinAmt
	};
	fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
		if (err) console.log(err)
	});
    };
}
}
if(message.content.startsWith(prefix)){

	if(blacklist == "trues") {
	return;
	}

if(message.content.startsWith(prefix)){
if (message.content === prefix + "가입") {
	if(message.author.bot) return;
	let embed1111 = new Discord.MessageEmbed()
	embed1111.setColor("#FFFFCC")
	embed1111.setTitle("이미 가입되어있습니다!")
	embed1111.addField("**Name**", `**${message.author.tag}**`, true)
	embed1111.addField("**ID**", `**${message.author.id}**`, true)
	if(verified === "trues") return message.react('692644452401020958').then(message.channel.send(embed1111))
const embed1 = new Discord.MessageEmbed()
		embed1.setColor("#ff0000")
		embed1.setTitle("주의사항")
		embed1.addField("**알려드립니다!**", `**봇을 차단하거나 \`\`서버 멤버가 보내는 개인 메시지 허용하기\`\`가 꺼져있다면 서비스 이용이 불가능합니다.**`, true)
		message.channel.send(embed1)
const embed = new Discord.MessageEmbed()
		let filter = (reaction, user) => (reaction.emoji.name === '✅' || reaction.emoji.name === '❎') && user.id === message.author.id
		let firstembed = new Discord.MessageEmbed()
		.setColor("#FFFFFA")
		.setTitle("서비스에 가입하시겠습니까?")
		.addField("**Name**", `**${message.author.tag}**`, true)
		.addField("**ID**", `**${message.author.id}**`, true)
		.addField("**데이터베이스 가입**", `**통장, 지갑**`)
		.addField("**디스코드 정보 가입**", `**프로필, 유저정보**`)
		.addField("**Tos 를 꼭 읽어주세요**", `**[[Pure Terms of Service]](https://github.com/AIoneKR/Team-Leo-Discord-Bot/blob/master/Team%20Leo%20Tos.md)**`)
		message.react('🇩')
		setTimeout(() => {
		message.react('🇲')
		}, 500)
          message.author.send(firstembed).then((th) => {
		  th.react('✅')
		  setTimeout(() => {
		  th.react('❎')
		  }, 1000)
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '✅') {
	const embed = new Discord.MessageEmbed()
	embed.setColor("#44ff7a")
	embed.setTitle("서비스에 정상적으로 가입되었습니다!")
	embed.addField("**Name**", `**${message.author.tag}**`, true)
	embed.addField("**ID**", `**${message.author.id}**`, true)
	embed.addField("**데이터베이스 가입**", `**통장, 지갑**`)
	embed.addField("**디스코드 정보 가입**", `**프로필, 유저정보**`)
	th.edit(embed)
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서비스 가입`)
	verifieds[message.author.id] = {
		verifieds: "trues"
	};

	fs.writeFile("./Database/verified.json", JSON.stringify(verifieds), (err) => {
		if (err) console.log(err)
	})
			} else {
			  let embed1 = new Discord.MessageEmbed()
			  embed1.setColor("RED")
			  embed1.setTitle("서비스 가입 거부")
			  embed1.addField("**Name**", `**${message.author.tag}**`, true)
			  embed1.addField("**ID**", `**${message.author.id}**`, true)
			  th.edit(embed1)
			  console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서비스 가입 거부`)
			}
		  })
		})
}
}

if(verified === "falses") {
	if(message.content.startsWith(prefix)){
	if(message.content === prefix + "가입" || message.content === prefix + "join") return;
	const embed = new Discord.MessageEmbed()
	embed.setColor("FFFFFC")
	embed.setTitle(`서비스 미가입`)
	embed.setDescription("서비스에 가입되어있지않습니다!")
	embed.addField(prefix + "가입",
	"**서비스에 가입합니다.**", true)
	message.channel.send(embed);
	return;
};
}

if(message.content.startsWith(prefix + "프로필") || message.content.startsWith(prefix + "유저정보") || message.content.startsWith(prefix + "돈주기") || message.content.startsWith(prefix + "은행정보")){
let args = message.content.split(" ").slice(1);
let user12 = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
	    if(!verifieds[user12.id]){
        verifieds[user12.id] = {
            verifieds: "falses"
        };
    }
if(user12.bot) {
	verifieds[user12.id] = {
        verifieds: "trues"
        };
}
let verifieddd = verifieds[user12.id].verifieds;
if(verifieddd === "falses") {
	const embed = new Discord.MessageEmbed()
	embed.setColor("RED")
	embed.setTitle(`${user12.tag}님이 가입하지않았습니다!`)
	embed.setDescription("가입하라고 소리질러주세요!")
	embed.addField(prefix + "가입",
	"**서비스에 가입합니다.**", true)
	message.channel.send(embed);
	return;
};
}

if(message.content.startsWith(prefix)){
if (message.content === prefix + "탈퇴") {
		const embed = new Discord.MessageEmbed()
		let filter = (reaction, user) => (reaction.emoji.name === '✅' || reaction.emoji.name === '❎') && user.id === message.author.id
		let firstembed = new Discord.MessageEmbed()
		.setColor("#FFFFFA")
		.setTitle("서비스에서 탈퇴하시겠습니까?")
		.addField("**Name**", `**${message.author.tag}**`, true)
		.addField("**ID**", `**${message.author.id}**`, true)
		.addField("**데이터베이스 제거**", `**통장, 지갑**`)
		.addField("**디스코드 정보 제거**", `**프로필, 유저정보**`)
		message.react('🇩')
		setTimeout(() => {
		message.react('🇲')
		}, 500)
          message.author.send(firstembed).then((th) => {
		  th.react('✅')
		  setTimeout(() => {
		  th.react('❎')
		  }, 1000)
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '✅') {
        message.react('692644452220534857')
	const embed2 = new Discord.MessageEmbed()
	embed2.setColor("#44ff7a")
	embed2.setTitle("서비스에서 정상적으로 탈퇴되었습니다!")
	embed2.addField("**Name**", `**${message.author.tag}**`, true)
	embed2.addField("**ID**", `**${message.author.id}**`, true)
	embed2.addField("**데이터베이스 제거**", `**통장, 지갑**`)
	embed2.addField("**디스코드 정보 제거**", `**프로필, 유저정보**`)
	th.edit(embed2)
	message.react('692644452220534857')
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서비스 탈퇴`)
	verifieds[message.author.id] = {
		verifieds: "falses"
	};
	
	fs.writeFile("./Database/verified.json", JSON.stringify(verifieds), (err) => {
		if (err) console.log(err)
	})

	coins[message.author.id] = {
		coins: 0
	};
	
	moneys[message.author.id] = {
		moneys: 0
	};

	fs.writeFile("./Database/coins.json", JSON.stringify(coins), (err) => {
		if(err) console.log(err)
	});	
	fs.writeFile("./Database/moneys.json", JSON.stringify(moneys), (err) => {
		if(err) console.log(err)
	});
			} else {
			  let embed1 = new Discord.MessageEmbed()
			  embed1.setColor("RED")
			  embed1.setTitle("서비스 탈퇴 거부")
			  embed1.addField("**Name**", `**${message.author.tag}**`, true)
			  embed1.addField("**ID**", `**${message.author.id}**`, true)
			  th.edit(embed1)
			  console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /서비스 탈퇴 거부`)
			}
		  })
		})
}
}

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
	if(message.content.startsWith(prefix)) {
		const cooldown1 = used1.get(message.author.id);
		if (cooldown1) {
			const remaining = Duration(cooldown1 - Date.now(), { units: ['m', 's'], round: true});
			return message.reply("`" + remaining + "`" + "후에 다시해주세요.").catch((err) => message.reply(`${err}`));
		} else {
			used1.set(message.author.id, Date.now() + 3000);
				setTimeout(() => {
				used1.delete(message.author.id)
				}, 5000)
		}
	}
	if(message.content === prefix + "돈받기") {
		const cooldown = used.get(message.author.id);
		if (cooldown) {
			const remaining = Duration(cooldown - Date.now(), { units: ['m', 's'], round: true});
			return message.reply("`" + remaining + "`" + "후에 다시해주세요.").catch((err) => message.reply(`${err}`));
		} else {
			used.set(message.author.id, Date.now() + 60000);
				setTimeout(() => {
				used.delete(message.author.id)
				}, 60000)
		}
	}

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
}
});
client.login(process.env.TOKEN);