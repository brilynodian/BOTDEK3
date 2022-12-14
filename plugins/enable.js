let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} πππππ ππππ’πͺ ππ‘π πππ’π’π¦π`,
	rows: [
	    {title: "β¦β¨β¦ β¦ Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "β¦π«β¦ β¦ Delete", rowId: `${usedPrefix + command} delete`},
	    {title: "β¦πβ¦ β¦ Public", rowId: `${usedPrefix + command} public`},
	{title: "οΈβ¦π£οΈβ¦ β¦ Simi", rowId: `${usedPrefix + command} simi`},
	{title: "β¦πβ¦ β¦ Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "β¦πβ¦ β¦ PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "β¦πβ¦ β¦ Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "οΈβ¦πΌοΈβ¦ β¦ Antisticker", rowId: `${usedPrefix + command} antisticker`},
	{title: "β¦ββ¦ β¦ Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "β¦πβ¦ β¦ Antitoxic", rowId: `${usedPrefix + command} antibadword`},
	{title: "β¦β¬οΈβ¦ β¦ Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "β¦πΆβ¦ β¦ Autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	{title: "β¦π¨β¦ β¦ Autosticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "β¦πβ¦ β¦ Detect", rowId: `${usedPrefix + command} detect`},
	{title: "β¦πβ¦ β¦ Anti spam", rowId: `${usedPrefix + command} antispam`},
	{title: "β¦πβ¦ β¦ Document", rowId: `${usedPrefix + command} document`},
	{title: "β¦π€β¦ β¦ WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "β¦ββ¦ β¦ Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "β¦π΄β¦ β¦ Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "β¦πβ¦ β¦ Anti Call", rowId: `${usedPrefix + command} anticall`},
	{title: "β¦βοΈβ¦ β¦ Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "β¦π¬β¦ β¦ PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "β¦π’β¦ β¦ GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "β¦π·β¦ β¦ SwOnly", rowId: `${usedPrefix + command} swonly`},
	{title: "β¦π·β¦ β¦ animeupdate", rowId: `${usedPrefix + command} animeupdate`},
	{title: "β¦π·β¦ β¦ animenews", rowId: `${usedPrefix + command} animenews`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "πππππ πππ₯πβ",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
     case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBadword = isEnable
      break
    case 'antispam':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.antispam = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.anticall = isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    // case 'autolevelup':
    //   isUser = true
    //   user.autolevelup = isEnable
    //   break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'animeupdate':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['animeupdate'] = isEnable
      break
    case 'animenews':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['animenews'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `*${htki} SUCSESS ${htka}*
ποΈ *Type:* ${type} 
π *Status:* Succes β
ποΈ *Options:* ${isEnable ? 'Enable' : 'Disable'}
π£ *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? 'βοΈ Disable' : 'βοΈ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['π Menu', '.menu']],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
