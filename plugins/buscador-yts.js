import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[ππππ] πΈπ½ππ΄πππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ πΎ π²π°π½π°π» π³π΄ ππΎππππ±π΄*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β π³πππππππ: ${v.durationH}
β²οΈ πΏππππππππ ${v.publishedTime}
ποΈ ${v.view} ππππππ
`.trim()
case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} ππππππππππππ_
π₯ ${v.videoCount} ππππππ
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
