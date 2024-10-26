module.exports = {
 config: {
	 name: "🤣",
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
 if (event.body && event.body.toLowerCase() === "🤣") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/442365422_1152989649348952_4126355343691587184_n.mp3/areastedt.mp3?_nc_cat=101&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeEARVgf6BshMhFQcwScF0KfAMgSdZPQ_bwAyBJ1k9D9vBeyP6F7heU4iecCt1xmAWnkNVnbzKnl7iLhVlkJr3bj&_nc_ohc=3YRzsCyVAZIQ7kNvgFPvWeR&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AQZ_rENiKpm8hkZWWIxHP4H&oh=03_Q7cD1QHzstyElPTc4ssr1NagglhWFyL68wOxBHp7aA0uANw2RA&oe=671EFFD8&dl=1")
 });
 }
 }
}
