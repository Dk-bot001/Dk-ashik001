module.exports = {
 config: {
	 name: "😭",
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
 if (event.body && event.body.toLowerCase() === "😭") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/336045857_963338951511759_5989794053257368573_n.mp3/kanna.mp3?_nc_cat=107&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeFnMygUEEYCF_qf0g6ci00BjRl-D5-koZGNGX4Pn6ShkZNO-oN30V8pG6wDVMeaQ4GCbAN9dmQz96LlhppHQhJX&_nc_ohc=8T9PTtDE0S4Q7kNvgFxVV5f&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AJoOMRgGr3HkKpa0l5In7qD&oh=03_Q7cD1QG4uImR9M1_beCyvpKvrO_KpiUUytJZ3nS3sKki_cQh0w&oe=671F308C&dl=1")
 });
 }
 }
}
