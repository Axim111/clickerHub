import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';


export const profileAction =async() => bot.action("profile",async ctx =>{

    const text = `
    name: ${await ctx.session.user.username}
    role: ${await ctx.session.user.role}
    scoreMoney: ${await ctx.session.user.scoreMoney}
    `
const markProfile = [
        [Markup.button.callback("buy PRO", "buy PRO")],
        [Markup.button.callback(ctx.session.callbackMessage, "start")],
      ]
  
await ctx.editMessageText(text,{reply_markup:{inline_keyboard: markProfile}})



})
