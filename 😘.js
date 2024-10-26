module.exports = {
 config: {
	 name: "😘",
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
 if (event.body && event.body.toLowerCase() === "😘") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/319541212_911271966486100_1570278118324846824_n.mp3/cummah.mp3?_nc_cat=102&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeExcMaXbofu50Bi5kdeEWUxD-seaIgiMbIP6x5oiCIxsvSczzhVbcG6QW-q35ZBypZMqtvpUfKuVriqyQzMeEG9&_nc_ohc=YnZq-KjaM6oQ7kNvgFl0Zrh&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AhJwWLtZnYNyesrZLXtgsxL&oh=03_Q7cD1QE1blX0_p5Txw6JpVl1ykl1Sxpy4LyRXc0A3QOXhEFWMA&oe=671F19EB&dl=1")
 });
 }
 }
}
