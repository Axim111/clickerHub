import {GoogleGenerativeAI } from "@google/generative-ai"

import {bot} from "../../../../connect/bot.js"

import { message } from 'telegraf/filters'

import { Markup } from "telegraf";
import { keyboardStart } from "../../../../common/botUI/keyboardStart.js";
import { GPTUtil } from '../../../../utils/GPTUtil.js';

export const gptAction = async()=>{

  const genAI = new GoogleGenerativeAI(process.env.AI_KEY||"") //

  bot.action("GPT", async(ctx:any)=>{
    await ctx.reply("taping", Markup.keyboard([
      ["стоп"],
      
    ]).oneTime().resize());

    await ctx.deleteMessage();

    bot.on(message('text'), async (ctx) => {

     

      const prompt = ctx.update.message.text
      if(!prompt || prompt=="стоп"){
        await keyboardStart(ctx, "gpt was closed")
        return
      }
      GPTUtil(ctx, prompt)

    })
    
  })

  }
  
  
