import {bot} from "../../../../connect/bot.js"

import { Markup , Composer,Scenes, Context } from 'telegraf';
import { callbackQuery } from "telegraf/filters"

import {ocr} from "../../../../utils/ocr.js"
import {IMyContext } from '../../../../types/session.js';

export const imgToTextAction =async() => {
  bot.action("language",async(ctx)=>{
    await ctx.deleteMessage();
    await ctx.reply("drop img",Markup.inlineKeyboard([
      [Markup.button.callback("rus", "rus img-to-text")],
      [Markup.button.callback("eng", "eng img-to-text")],
      [Markup.button.callback(ctx.session.callbackMessage, "util")],
    ]))
  })
  
 bot.action(/img-to-text/,async (ctx:any) =>{//в telegraf не хватает типов
   
    const language = ctx.update.callback_query.data
    ctx.session.language=(language.split(" ")[0])
    console.log(ctx.session.language)
    await ctx.deleteMessage();
  
  
      await ctx.reply("drop img",Markup.inlineKeyboard([
        [Markup.button.callback(ctx.session.callbackMessage, "img-to-text/language")],
      ]))
      
      bot.on("photo",async(ctx)=>{
        const photoGetPath = ((await ctx.telegram.getFile(ctx.message.photo[ctx.message.photo.length-1].file_id)).file_path)
        const photoPath = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${photoGetPath}`
        const res = await ocr(photoPath, ctx.session.language)
        ctx.reply(res)
        
      })
  })

 





}

 