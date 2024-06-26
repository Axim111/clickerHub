import {bot} from "../connect/bot.js"
import { menuStc } from '../ctxMiddleware/menuStx.js';


export const start =async() => bot.start(async ctx =>{
  menuStc(ctx)
  
})