import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';


export const profileAction =async() => bot.action("profile",async ctx =>{
  await ctx.deleteMessage(); //может удалить сообщение собеседника

  ctx.reply(`
    name: ${ctx.session.user.username}
    role: ${ctx.session.user.role}
    scoreMoney: ${ctx.session.user.scoreMoney}
    `,Markup.inlineKeyboard([
      [Markup.button.callback("buy PRO", "buy PRO")],
      [Markup.button.callback(ctx.session.callbackMessage, "start")],
    ]))
})
