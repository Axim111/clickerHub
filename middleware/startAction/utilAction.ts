import {Markup, bot} from "../../connect/bot.js"

import { Telegraf } from 'telegraf';


export const utilAction =async() => bot.action("util",async ctx =>{

const text = `choice utile`
const markUtils = [
  [Markup.button.callback("img-to-text", "img-to-text")],
  [Markup.button.callback("GPT", "GPT")],
  [Markup.button.callback(ctx.session.callbackMessage, "start")],
]

await ctx.editMessageText(text,{reply_markup:{inline_keyboard: markUtils}})

})