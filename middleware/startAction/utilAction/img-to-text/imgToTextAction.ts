import {bot} from "../../../../connect/bot.js"

import { Markup , Composer,Scenes, Context } from 'telegraf';
import { callbackQuery } from "telegraf/filters"

import {ORCUtil} from "../../../../utils/ORCUtil.js"
import {IMyContext } from '../../../../types/session.js';

export const imgToTextAction =async() => {
  bot.action("img-to-text",async(ctx)=>{
    await ctx.deleteMessage();
    await ctx.reply("drop img",Markup.inlineKeyboard([
      [Markup.button.callback("rus", "rus drop")],
      [Markup.button.callback("eng", "eng drop")],
      [Markup.button.callback(ctx.session.callbackMessage, "util")],
    ]))
  })
  
 bot.action(/drop/,async (ctx:any) =>{//в telegraf не хватает типов
   
    const language = ctx.update.callback_query.data
    ctx.session.language=(language.split(" ")[0])
    await ctx.deleteMessage();
  
  
      await ctx.reply("drop img",Markup.inlineKeyboard([
        [Markup.button.callback(ctx.session.callbackMessage, "img-to-text")],
      ]))
      
      bot.on("photo",async(ctx)=>{
        const photoGetPath = ((await ctx.telegram.getFile(ctx.message.photo[ctx.message.photo.length-1].file_id)).file_path)
        const photoPath = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${photoGetPath}`
        const res = await ORCUtil(photoPath, ctx.session.language)
        res.length!=0?ctx.reply(res):ctx.reply("text is avoid")
        
        
      })
  })

 





}

 