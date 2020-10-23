const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");
const fs = require("fs");
const blacklists = require("../../Database/blacklist.json");
const Discord = require("discord.js")
const COR = "#a6ffed"
const dotenv = require("dotenv")
const db = require("mongoose").connection
const moment = require("moment-timezone")
const mongoose = require("mongoose")
const os = require("os")
const util = require("util")
const dbcm = require("dbcm")
const utils = new dbcm.Utils({ lang: "ko-KR" })
const child = require("child_process")
const base32 = require('base32');
const koreanbots = require('koreanbots')
const MyBot = new koreanbots.MyBot('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzM4MTI5MTY2NjE3ODA1OCIsImlhdCI6MTU4ODYwMTI2MCwiZXhwIjoxNjIwMTU4ODYwfQ.HqB1OWLNamYk9yq4wuXi4hpoZIipbQTsG-twqR4gbY6dgA0Zsp_7oDkKrs9oGjMwyy-3rY_OHIiqrNKiTBdF4Kln1UvovQrj-Ogdo5kM1ZDuTwVSqtFTvXGhH7kZ3HFNysy3E0FEdRiBXkHuexUNo7fQv6mOJstd5kUChq4s43s')

const XD = "NjlolzE1MXD2NzQ1ODgwXDax.XDKhdA.8shXDPNXD-qAXDG_bQADloliB2h"

module.exports = {
    name: "cmd",
    category: "🔐 개발자명령어",
    description: "코드 테스트를 합니다.",
	usage: "<코드>",
    run: async (client, message) => {
        let args = message.content.split(" ").slice(1);
           if (args.join(" ").toLowerCase().includes("token") || args.join(" ").toLowerCase().includes("\x63\x6C\x69\x65\x6E\x74\x2E\x74\x6F\x6B\x65\x6E")) {
			   let filter1 = (reaction, user) => (reaction.emoji.name === '🗑️') && user.id === message.author.id
			   let cmd12 = args.join(" ")
			   	let load5 = new MessageEmbed()
				load5.setTitle(`Eval`)
				load5.setDescription(`**${client.emojis.cache.get('691681971478462495')} Please Wait..**`)
                load5.setColor(`PURPLE`)
			let loading123 = await message.channel.send(load5)
			message.react('692644452220534857')
            let embed = new MessageEmbed()
            .setAuthor("Eval", message.author.avatarURL())
            .setColor("PURPLE")
			.addField("⌨Input:", `\`\`\`js\n${String(cmd12).length > 1024 ? (String(cmd12).substring(0, 983) + "\n//And much more...") : (cmd12)}\n\`\`\``)
            .addField("💻Output:", `\`\`\`js\n${XD}\n\`\`\``)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
			let embed1234 = new MessageEmbed()
            embed1234.setAuthor("Eval", message.author.avatarURL())
            embed1234.setColor("PURPLE")
			embed1234.addField("⌨Input:", `\`\`\`js\n${String(cmd12).length > 1024 ? (String(cmd12).substring(0, 983) + "\n//And much more...") : (cmd12)}\n\`\`\``)
            embed1234.addField("💻Output:", `\`\`\`js\nReferenceError: gu la da si bal nom a is not defined\n\`\`\``)
            embed1234.setFooter(message.author.tag, message.author.displayAvatarURL())
            embed1234.setTimestamp()
			loading123.edit(embed)
		  setTimeout(() => {
		  loading123.edit(embed1234).then((th) => {
		  th.react('🗑️')
		  th.awaitReactions(filter1, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '🗑️') {
			th.delete()
			}
		  })
		})
		}, 1000)
		} else {
        if (message.author.id !== process.env.dvr) {
        let embed = new MessageEmbed()
        message.react('692644452401020958')
        embed.setColor(0xff0d10)
        embed.setTitle(`Developer Permission ERROR!`)
        embed.setDescription("권한이 없습니다!\n**필요한 권한 : 개발자 권한**")
        embed.setTimestamp()
        embed.setFooter(process.env.botname + ` ${process.env.v}`, client.user.displayAvatarURL())
        message.channel.send({embed}).then(message => {message.delete({ timeout: 5000, reason: 'delete' })})
        return;
        }
	let filter = (reaction, user) => (reaction.emoji.name === '🗑️') && user.id === message.author.id
	            let load = new MessageEmbed()
				load.setTitle(`Eval`)
				load.setDescription(`**${client.emojis.cache.get('691681971478462495')} Please Wait..**`)
                load.setColor(`PURPLE`)
	let loading = await message.channel.send(load)

    let msg = message
    let cmd = args.join(" ")
    let type

    new Promise(resolve => resolve(eval(cmd)))
        .then(async res => {
            let code = type = res

            if (typeof code !== "string") code = util.inspect(code, { depth: 0 })
            if(typeof type === "function") code = type.toString()

            let evalEmbed = new MessageEmbed()
                evalEmbed.setAuthor("Eval", message.author.avatarURL())
                evalEmbed.setColor(`PURPLE`)
                evalEmbed.addField("⌨Input:", `\`\`\`js\n${String(cmd).length > 1024 ? (String(cmd).substring(0, 983) + "\n//And much more...") : (cmd)}\n\`\`\``)
                evalEmbed.addField("💻Output:", `\`\`\`js\n${String(code).length > 1024 ? (String(code).substring(0, 983) + "\n//And much more...") : (code)}\n\`\`\``)
			loading.edit(evalEmbed).then((th) => {
		  th.react('🗑️')
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '🗑️') {
			th.delete()
			}
		  })
		})
        }).catch(Ecmd => {
            let Eembed = new MessageEmbed()
                Eembed.setTitle("Eval Error:")
                Eembed.setColor(`PURPLE`)
                Eembed.setDescription(`\`\`\`${Ecmd}\`\`\``)
                loading.edit(Eembed)
			loading.edit(Eembed).then((th) => {
		  th.react('🗑️')
		  th.awaitReactions(filter, {
			max: 1
		  }).then((collected) => {
			if (collected.array()[0].emoji.name === '🗑️') {
			th.delete()
			}
		  })
		})
        });
		}
	}
}