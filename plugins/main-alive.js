

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/Nadunsl"
    let murl = "https://Whatsapp.com"
    let img = "https://i.imgur.com/XoPpzH2.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "👋𝙃𝙀𝙇𝙇𝙊 𝙐𝙎𝙀𝙍 𝙄𝙈 𝘾𝙔𝘽𝙀𝙍 𝙂𝙊𝙎𝙏 𝙈𝘿 𝘽𝙊𝙏 𝚌𝚛𝚎𝚊𝚝𝚎 𝚋𝚢 𝚖𝚛.𝚗𝚊𝚍𝚞𝚗♕",
          body: "CYBER-GOST-MD",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/JeR0gHj4gYWBe9S5lzbjNn',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
