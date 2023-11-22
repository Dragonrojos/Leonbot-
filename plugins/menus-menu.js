import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` 𝗬𝗮𝗺𝘀𝗨 𝗕𝗼𝘁!

 ┏━━━━━━━━━━━━━━━━━━┓
┃ *◉—𝗬𝗮𝗺𝘀𝗨 𝗕𝗼𝘁!—◉*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ *𝗢𝗪𝗡𝗘𝗥:* 𝗬𝗮𝗺𝘀𝗨 𝗕𝗼𝘁!
┣⟣☯︎ *𝗡𝗨𝗠𝗘𝗥𝗢:* +52 951 217 0935
┗━━━━━━━━━━━━━━━━━━┛

*┃𝗕 𝗢 𝗧 𝗠 𝗘 𝗡 𝗨 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥𝗘𝗦*┃
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥✨*
┃Enable(activar) Disable(desactivar)┃
┣⚙️ _.enable *welcome*_
┣⚙️ _.disable *welcome*_
┣⚙️ _.enable *antiviewonce*_
┣⚙️ _.disable *antiviewonce*_
┣⚙️ _.enable *modoadmin*_
┣⚙️ _.disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦 ✨* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⚙️ _.add *<numero>*_
┣⚙️ _.kick *<@tag>*_
┣⚙️ _.kick2 *<@tag>*_
┣⚙️ _.listanum *<texto>*_
┣⚙️ _.kicknum *<texto>*_
┣⚙️ _.grupo *<abrir / cerrar>*_
┣⚙️ _.grouptime *<opcion> <tiempo>*_
┣⚙️ _.promote *<@tag>*_
┣⚙️ _.demote *<@tag>*_
┣⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⚙️ _.demote *<@tag>*_
┣⚙️ _.infogroup_
┣⚙️ _.resetlink_
┣⚙️ _.link_
┣⚙️ _.setname *<texto>*_
┣⚙️ _.setdesc *<texto>*_
┣⚙️ _.invocar *<texto>*_
┣⚙️ _.setwelcome *<texto>*_
┣⚙️ _.setbye *<texto>*_
┣⚙️ _.hidetag *<texto>*_
┣⚙️ _.hidetag *<audio>*_
┣⚙️ _.hidetag *<video>*_
┣⚙️ _.hidetag *<imagen>*_
┣⚙️ _.warn *<@tag>*_
┣⚙️ _.unwarn *<@tag>*_
┣⚙️ _.listwarn_
┣⚙️ _.fantasmas_
┣⚙️ _.destraba_
┣⚙️ _.setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗕𝗨𝗦𝗖𝗔𝗥 ✨*
┃ 𝗔𝗟𝗖𝗔𝗕𝗢𝗧𝗩𝟮.𝟬 ≡┃
┣👤 _.githubsearch *<texto>*_
┣👤 _.pelisplus *<texto>*_
┣👤 _.modapk *<texto>*_
┣👤 _.stickersearch *<texto>*_
┣👤 _.stickersearch2 *<texto>*_
┣👤 _.animeinfo *<texto>*_
┣👤 _.google *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗙𝗥𝗔𝗦𝗘𝗦 𝗢 𝗣𝗜𝗥𝗢𝗣𝗢𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⚫️ _.piropo_
┣⚫️ _.consejo_
┣⚫️ _.fraseromantica_
┣⚫️ _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟠 _.clima *<país> <ciudad>*_
┣🟠 _.encuesta *<texto1|texto2...>*_
┣🟠 _.ocr *<responde a imagen>*_
┣🟠 _.hd *<responde a imagen>*_
┣🟠 _.acortar *<enlace / link / url>*_
┣🟠 _.calc *<operacion math>*_
┣🟠 _.horario_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟣 _.sticker *<responder a imagen o video>*_
┣🟣 _.kiss *<@tag>*_
┣🟣 _.dado_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟣 _.play *<texto de la canción >*_
┗━━━━━━━━━━━━━━━━┛
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
