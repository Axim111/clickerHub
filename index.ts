

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
      `${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};


bot.launch(),



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8443, async () => {
  // console.log("Server running on port 3000");
  await setWebhook()
});