let handler = async (m, { conn }) => {
let caption = `*وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
Waalaikumsalam Warahmatullahi Wabarakatuh*
`

conn.sendButton(m.chat, caption, author, null, [
        ['Waalaikumsalam', 'Waalaikumsalam'],
    ], { quoted: m })
}
handler.customPrefix = /^(assalamualaikum|salam|samlekom|اَلسَّلَامُ عَلَيْكُمْ)/i
handler.command = new RegExp
module.exports = handler
