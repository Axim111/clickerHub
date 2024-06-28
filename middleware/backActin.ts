import {bot} from "../connect/bot.js"

import {registration} from "../common/users/registration.js"
import {Markup} from "telegraf"
import { IMyContext } from './../types/session.d.js';






export const backAction = async()=>{
  bot.action("back",async (ctx, next) =>{
  
  
    await ctx.deleteMessage();

   
    
  })

}




