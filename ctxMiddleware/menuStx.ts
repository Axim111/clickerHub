import { Context,session, Markup, Telegraf } from "telegraf"
import {registration} from "../common/users/registration.js"
import { Session } from 'inspector';
import { IMyContext } from "../types/session.js"


const menuStc= async(ctx:IMyContext) =>{




  
  ctx.reply("start", Markup.inlineKeyboard([
    [Markup.button.callback("profile", "profile")],
    [Markup.button.callback("api", "api")],
    [Markup.button.callback("web", "web")],
  ]))
  await registration(ctx)

  
  
  
}
export {menuStc}