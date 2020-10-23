const weather = require('weather-js');
const discord = require('discord.js')

module.exports = {
    name: "날씨",
    category: "🔍 검색명령어",
    description: "해당 지역의 날씨를 알려줍니다.",
	usage: "<검색할 지역>",
    run: async (client, message, args) => {
	var rtext = args.join(" ");
    if(!args.length) {
      return message.channel.send("지역을 입력해주세요.")
    }
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {

if (result[0].current.skytext == "Sunny") {
rand = "맑음";
} else if (result[0].current.skytext == "Mostly Cloudy") {
rand = "대체로 흐림";
} else if (result[0].current.skytext == "Rain Showers") {
rand = "소나기";
} else if (result[0].current.skytext == "Partly Sunny") {
rand = "대체로 맑음";
} else if (result[0].current.skytext == "Cloudy") {
rand = "흐림";
} else if (result[0].current.skytext == "Rain") {
rand = "비가내림";
} else if (result[0].current.skytext == "Mostly Clear") {
rand = "구름 조금";
} else if (result[0].current.skytext == "Mostly Sunny") {
rand = "부분적으로 맑음";
} else if (result[0].current.skytext == "Clear") {
rand = "맑음";
} else if (result[0].current.skytext == "Partly Cloudy") {
rand = "대체로 흐림";
} else if (result[0].current.skytext == "Fog") {
rand = "안개";
} else if (result[0].current.skytext == "Light Rain") {
rand = "가벼운 비";
} else if (result[0].current.skytext == "") {
rand = "";
} else if (result[0].current.skytext == "") {
rand = "";
} else if (result[0].current.skytext == "") {
rand = "";
} else if (result[0].current.skytext == "") {
rand = "";
} else if (result[0].current.skytext == "") {
rand = "";
} else {
rand = result[0].current.skytext;
}

let embed = new discord.MessageEmbed()
.setTitle(`날씨 - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("모든 지역의 날씨를 알려줄수있어요!")
.addField("온도", `${result[0].current.temperature}°C`, true)
.addField("날씨", `${rand}`, true)
.addField("습도", `${result[0].current.humidity}%`, true)
.addField("바람 속도", result[0].current.winddisplay, true)
.addField("측정 시간", result[0].current.observationtime, true)
.setFooter("현제 본기능은 날씨검색시 느려터질수있습니다.")
.setTimestamp()
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
   console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /날씨 사용 > ${rtext}`)
} catch(e) {
	return message.channel.send(`찾을수 없는 지역입니다.\nError : ${e.message}`)
}
});
}
}