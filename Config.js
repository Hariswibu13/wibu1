const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6281232823363"
global.ownername = "ris`"
global.ytname = "https://youtube.com/@ris_edits?si=LmneTYajuHendDxQ: "
global.socialm = "soon: "
global.location = "Indonesia"

global.ownernumber = '6281232823363'  //creator number
global.ownername = 'ris`' //owner name
global.botname = 'vilhaze' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘ris✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'vilhaze Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "ris botz inc."

//theme link
global.link = '' // if you want to send bot reply with group link then put your link here 🌿 
global.support = 'soon'
//custom prefix
global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti92 = true //auto block +92 
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    pm: ' 📍*sorry darling* Bot wont work in private darling📍 \n\n https://chat.whatsapp.com/Lunwjjmm71ZK7LnxMf5Va4',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
