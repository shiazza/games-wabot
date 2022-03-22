let handler = async m => m.reply(`
╭─「 Donasi • Sekali 」
│ • Buy me coffe   : https://www.buymeacoffee.com/shiazza
│ • Nih buat jajan : https://www.nihbuatjajan.com/shiazza
╰────
╭─「 Donasi • Perbulan 」
│ > Patreon   : https://www.patreon.com/shiazza
| > Sociabuzz : https://sociabuzz.com/shiazza/tribe
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
