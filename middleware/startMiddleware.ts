import {bot} from "../connect/bot.js"

import {registration} from "../common/users/registration.js"
import {Markup} from "telegraf"
import { IMyContext } from './../types/session.d.js';
import { keyboardStart } from './../common/botUI/keyboardStart.js';



export const start =async() => {
  const logic = async(ctx:IMyContext)=>{
    
    await registration(ctx)

    await keyboardStart(ctx, "i'm multi tool")
   
    ctx.reply("start", Markup.inlineKeyboard([
      [Markup.button.callback("profile", "profile")],
      [Markup.button.callback("util", "util")],
      [Markup.button.callback("web", "web")],
    ]))
    
    // await bot.telegram.deleteMessage(ctx.from?.id||"",ctx.message?.message_id?ctx.message?.message_id+1:1) // удаляет клаву вместе с надписью
    
  }
  bot.start(async ctx =>{
    logic(ctx)
  
})

bot.action("start",async ctx =>{
  
  await ctx.deleteMessage();
  logic(ctx)
 
})
}



