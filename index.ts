

import express from "express"

import axios from "axios"

import { Telegraf } from "telegraf"
import 'dotenv/config'

const app = express();

app.use(express.json());

const bot = new Telegraf(`${process.env.BOT_TOKEN}`);
bot.start((ctx) => ctx.reply('Welcome111'))
const WEBHOOK_URL = `${process.env.BOT_WEBHOOK}`;


bot.launch({
  webhook: {

    domain: `${process.env.BOT_WEBHOOK}`,


    port: 8443


  },
});



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, async () => {
  // console.log("Server running on port 3000");

});