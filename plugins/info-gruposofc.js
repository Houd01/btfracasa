let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
Hola 👋🏻, unete a los grupos oficiales

https://chat.whatsapp.com/Ks8pIMOQyKlIEkXUWgAWpE

https://chat.whatsapp.com/HMJ26cOLMsuFgdptY6wOaW

https://chat.whatsapp.com/DnlBayv1AWcHnOYHeLibwx
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
