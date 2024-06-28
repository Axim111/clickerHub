import {bot} from "../connect/bot.js"

import {registration} from "../common/users/registration.js"
import {Markup} from "telegraf"
import { IMyContext } from './../types/session.d.js';



export const start =async() => {
  const logic = async(ctx:IMyContext)=>{
    
    await registration(ctx)
    ctx.reply("start", Markup.inlineKeyboard([
      [Markup.button.callback("profile", "profile")],
      [Markup.button.callback("util", "util")],
      [Markup.button.callback("web", "web")],
    ]))
  }
  bot.start(async ctx =>{
    logic(ctx)
  
})

bot.action("start",async ctx =>{
  
  await ctx.deleteMessage();
  logic(ctx)
 
})
}



