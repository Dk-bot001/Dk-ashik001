module.exports = {
 config: {
	 name: "🫶",
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
 if (event.body && event.body.toLowerCase() === "🫶") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/319650405_2936378776664322_9079295023572043391_n.mp3/chele.mp3?_nc_cat=106&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHH4Glxa7kZxM9KdxMWakgq3Vqln7qJKSndWqWfuokpKW5URpk2ZuQR7yhDlJFSwohKM-8ozXQ0Pg0Yjb9_m8zj&_nc_ohc=lYYYjA0mlrEQ7kNvgGb1Lqi&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AsONFk38H6Gk1Q9VEAVOX3C&oh=03_Q7cD1QEl8HJnh0tiN_CVtTypDTQ-Hn1Z7nxMb6ZU-sG50JNB7A&oe=671F0723&dl=1")
 });
 }
 }
}
