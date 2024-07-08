import {bot} from "../connect/bot.js"

import {registration} from "../common/users/registration.js"
import {Markup} from "telegraf"
import { IMyContext } from './../types/session.d.js';
import { keyboardStart } from './../common/botUI/keyboardStart.js';
export const start = () =>
  {

    const markStart = [
      [Markup.button.callback("profile", "profile")],
      [Markup.button.callback("util", "util")],
    ]
    
    
      bot.start(async ctx =>{
        
    
        await registration(ctx)
    
        await keyboardStart(ctx, "i'm multi tool")
       
        const {message_id}= await ctx.reply("start", Markup.inlineKeyboard(markStart))
        
      
    })
    
    bot.action("start",async ctx =>{
      
    //     ctx.editMessageReplyMarkup({
    //       inline_keyboard: markStart
    //   })
      await ctx.editMessageText(`start`,{reply_markup:{inline_keyboard: markStart}})

    })

  }
