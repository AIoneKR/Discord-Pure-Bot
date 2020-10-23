const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const coins = require("../../Database/coins.json");
const blacklists = require("../../Database/blacklist.json");
const verifieds = require("../../Database/verified.json");

module.exports = {
    name: "탈퇴",
    category: "👥‍‍ 유저명령어",
    description: "서비스를 탈퇴합니다.",
    run: async (client, message, args) => {
	}
}