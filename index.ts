

import express from "express"



import  {Telegraf} from "telegraf"
import 'dotenv/config'

const app = express();

app.use(express.json());

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);
bot.start((ctx) => ctx.reply('Welcome111'))

app.use(await bot.createWebhook({ domain: `${process.env.BOT_WEBHOOK}` }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, async () => {
  
  console.log("Server running on port 3000 and bot...maybe");

});
