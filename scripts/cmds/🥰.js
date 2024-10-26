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
 if (event.body && event.body.toLowerCase() === "🥰") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/464507036_433405866457051_2409789424696763523_n.mp4/audioclip-1729977052000-9938.mp4?_nc_cat=105&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeGT1CrevCgN1Eu4tbgqx6EYKQt7MQt0bPQpC3sxC3Rs9CgfRFVhBnIUlnqTJH96L6ehqWKT-z-UvaNYbDLSsBeX&_nc_ohc=uqC0Ln3AG9IQ7kNvgGUTPgy&_nc_zt=28&_nc_ht=cdn.fbsbx.com&_nc_gid=AA23Ug85EXwvcNmjy-fkGYs&oh=03_Q7cD1QF97Fh1TK9_9JceE8n8HenyxP__ydcQE2oa0BEl6ofiWw&oe=671F23DE&dl=1")
 });
 }
 }
}
