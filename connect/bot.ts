import  {Telegraf, Markup} from "telegraf"
import 'dotenv/config'
const bot = new Telegraf(`${process.env.BOT_TOKEN}`);
export {bot, Markup}
