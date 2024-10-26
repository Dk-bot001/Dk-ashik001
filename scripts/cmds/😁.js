module.exports = {
 config: {
	 name: "😁",
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
 if (event.body && event.body.toLowerCase() === "😁") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/319719285_9010934258949078_921635711437862421_n.mp3/datcokcok.mp3?_nc_cat=105&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHNQtfjtKcs0MabmB-dZyXPM0H0kCCCdIozQfSQIIJ0iipfZoqSfhsru0d-lutA6gf7zMf3zA5rlz0Z6dElfm5n&_nc_ohc=DAo_PDAbRDgQ7kNvgE0pBwf&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AVtS_MFgb5CudakpWTWLEg1&oh=03_Q7cD1QGnxglJCpwlro1vVO3zNX6-ufHpfcDvSKIobi_mL8NIzw&oe=671F126D&dl=1")
 });
 }
 }
}
