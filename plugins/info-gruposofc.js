let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
Hola ππ», unete a los grupos oficiales

https://chat.whatsapp.com/Ks8pIMOQyKlIEkXUWgAWpE

https://chat.whatsapp.com/HMJ26cOLMsuFgdptY6wOaW

https://chat.whatsapp.com/DnlBayv1AWcHnOYHeLibwx
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
