const Discord = require("discord.js");
const School = require('school-kr') 
const school = new School()

module.exports = {
    name: "학교급식",
	aliases: ["급식"],
    category: "🔍 검색명령어",
    description: "학교 급식을 불러옵니다.",
	usage: "<초•중•고 학교 이름>",
    run: async (client, message, args) => {
	if (!args[0]) {
	return message.channel.send('학교 이름을 입력해주세요!');
	}
	try {
		let schoolsss = args[0]
  const result = await school.search(School.Region.GYEONGGI, schoolsss)
  school.init(School.Type.HIGH, School.Region.GYEONGGI, result[0].schoolCode)

  const meal = await school.getMeal()
  const calendar = await school.getCalendar()

  // 년도와 달을 지정하여 해당 날짜의 데이터를 조회할 수 있습니다.
  //const mealCustom = await school.getMeal(2018, 9)
  //const calendarCustom = await school.getCalendar(2017, 4)

  //console.log(mealCustom)
  //console.log(calendarCustom)

  // 년도값 대신 옵션 객체를 전달하여 데이터 수집 가능
  // year: 년도 (기본값: 현재 시점의 년도)
  // month: 달 (기본값: 현재 시점의 달)
  // default: 급식이 없는 경우 기본값 (기본값: '')
  const optionMeal = await school.getMeal({
    year: 2020,
    month: meal.month,
    default: '급식이 없습니다'
  })

  // 년도값 대신 옵션 객체를 전달하여 데이터 수집 가능
  // year: 년도 (기본값: 현재 시점의 년도)
  // month: 달 (기본값: 현재 시점의 달)
  // default: 급식이 없는 경우 기본값 (기본값: '')
  // separator: 하루에 2개 이상의 일정이 있는 경우의 구분문자 (기본값: ,)
  //            예: 겨울방학,토요휴업일
  const optionCalendar = await school.getCalendar({
    default: '일정이 없습니다',
    separator: '\n'
  })

	let embed = new Discord.MessageEmbed()
	.setColor('#EFFF00')
	.setTitle("급식정보")
	.addField("학교명", `${args[0]}`, true)
	.addField("조회 날짜", `${meal.month}월 ${meal.day}일`, true)
	.addField("조회 급식정보", `${meal.today}`)
	.addField(`${meal.month}월 일정`, `${optionCalendar}`)
	.setFooter("경기도 교육청에서 지원받아 제작되었습니다." + " • " + "현재는 경기도만 지원합니다.")
	.setTimestamp()
	message.channel.send(embed);
	console.log(`> ${message.guild.name} < | ${message.channel.name} | ${message.author.tag} (${message.author.id}) /학교정보 사용 > ${args[0]}`)
	} catch(err) {
	console.log(err)
	return message.channel.send(`찾을수 없는 학교입니다.\n코로나사태로 기능이 동작하지 않습니다.`)
	}
	}
}
