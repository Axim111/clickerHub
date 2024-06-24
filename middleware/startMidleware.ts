import {bot} from "../connect/bot.js"
export const start =async()=> bot.start(async stx =>{
  stx.reply("start")
})