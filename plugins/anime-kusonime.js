import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
    if (!text) throw '_Mau cari anime apa?_'
await m.reply(global.wait)
  let res = await fetch('https://api.lolhuman.xyz/api/kusonime?apikey=c33093fce6f2cd9991f30b79&url=' + encodeURIComponent(text))
let json= await res.json()
  const kanna =  `*judul:* "${json.title}"\n\n*info:* ${json.info}\n\n*sinopsis:* ${json.sinopsis}\n\n*link download:* ${json.link_dl}`
     
     conn.sendHydrated(m.chat, kanna, wm, json.thumb, `${json.link_dl}`, '🎐Link', null, null, [['🌎Menu', '.menu'], [null, null], [null, null]], m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.group = false
handler.premium = false

export default handler