import  {Telegraf, Markup,session} from "telegraf"
import 'dotenv/config'
import { IMyContext } from "../types/session.js"
const bot = new Telegraf<IMyContext>(`${process.env.BOT_TOKEN}`);
bot.use(session({
  defaultSession: () => (
    { user:0 })
}))
export {bot, Markup}
