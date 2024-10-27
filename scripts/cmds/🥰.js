module.exports = {
 config: {
	 name: "🥰",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase()==="🥰") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/464682213_9009789285711353_5852210236253770363_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFjZ-seaF-mO8jYLqrNFnsTNGZ_Amqzxgc0Zn8CarPGB73FF0WTzsf5mybrasz5Y1vEQQS8TweWOjcGB7oujzRZ&_nc_ohc=lMXo19zkpx4Q7kNvgEuNnK1&_nc_ht=scontent.xx&_nc_gid=AcPmLKYsVunHZSJ3wH7ecjU&oh=03_Q7cD1QEWf9W07J6PRqD9xyTYaB7nHV1l1Dk-uiIzoL6gH6-SYQ&oe=671F504B&dl=1)
 });
 }
 }
}
