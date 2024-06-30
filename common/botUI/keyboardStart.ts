import { Markup } from "telegraf";
import {IMyContext} from "../../types/session.d.js"
export const keyboardStart = async(ctx:IMyContext, text:string)=>{
  await ctx.reply(text, Markup.keyboard([
    ["/start", "web"],
  ]).oneTime().resize());
}