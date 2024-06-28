import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';


export const utilAction =async() => bot.action("util",async ctx =>{
  await ctx.deleteMessage(); //может удалить сообщение собеседника

  ctx.reply(`pick`,Markup.inlineKeyboard([
      [Markup.button.callback("img-to-text", "language")],
      [Markup.button.callback("text-to-speech", "text-to-speech")],
      [Markup.button.callback("GPT", "GPT")],
      [Markup.button.callback(ctx.session.callbackMessage, "start")],
    ]))
})