let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Gak'
  if (isAdmin) throw 'Padahal udah jadi admin ಠಿ_ಠ'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
