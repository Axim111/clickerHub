import {bot,Markup} from "../connect/bot.js"
import { menuStc } from './../ctxMiddleware/menuStx.js';

export const start =async()=> bot.start(async stx =>{
  menuStc(stx,Markup)
})