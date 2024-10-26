 module.exports = {
 config: {
	 name: "💋",
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
 if (event.body && event.body.toLowerCase() === "💋") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/343061184_757415462647528_5091832700268817956_n.mp3/lojja.mp3?_nc_cat=109&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeFw19AqSL6TunXvjlMkg_elq58ej5g-8Fernx6PmD7wV2BJ-DufyLSFBmirKkXG96v9Nq_rJIr-uQpQZUyheSn7&_nc_ohc=k8Na7Y1piRYQ7kNvgFXX-5g&_nc_ht=cdn.fbsbx.com&_nc_gid=APsgjc-qKA7Yn-KrAK6z-9H&oh=03_Q7cD1QEL2Vm6Z2bXkqvI_zf3jxwVCEe1w_eaSIhw8h8kqoyffg&oe=671F251C&dl=1")
 });
 }
 }
}
