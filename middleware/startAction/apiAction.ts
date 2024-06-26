import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';


export const apiAction =async() => bot.action("api",async ctx =>{
  await ctx.deleteMessage(); //может удалить сообщение собеседника

  ctx.reply(`pick`,Markup.inlineKeyboard([
      [Markup.button.callback("img-to-text", "img-to-text")],
      [Markup.button.callback("text-to-speech", "text-to-speech")],
      [Markup.button.callback("GPT", "GPT")],
    ]))
})