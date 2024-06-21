

import express from "express"

import axios from "axios"

import { Telegraf } from "telegraf"
import 'dotenv/config'

const app = express();

app.use(express.json());

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);
bot.start((ctx) => ctx.reply('Welcome'))
const WEBHOOK_URL = `${process.env.BOT_WEBHOOK}`;
const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const setWebhook = async () => {
  try {
    const response = await axios.post(
      `${TELEGRAM_API}/deleteWebhook`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};


bot.launch({
  webhook: {
    domain: WEBHOOK_URL,

    port: 3000,

   
  }}),



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, async () => {
  // console.log("Server running on port 3000");
  await setWebhook()
});