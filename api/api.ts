import express from "express"

import { bot } from "../connect/bot.js"
import cors from "cors"

import "dotenv/config"
import { getUserById } from "../common/users/getUserById.js"
import { createMessagesGpt } from "../common/utile/createMessagesGpt.js"
import { getMessagesGpt } from "../common/utile/getMessagesGpt.js"
import { GPTUtil } from "../utils/GPTUtil.js"
import { deleteMessagesGpt } from "../common/utile/deleteMessagesGpt.js"

const api = async () => {
  const app = express()

  app.use(express.json())

  const corsOptions = {
    origin: "*",
  }

  app.use(cors(corsOptions))

  process.env.MODE == "prod"
    ? app.use(await bot.createWebhook({ domain: `${process.env.BOT_WEBHOOK}` }))
    : bot.launch()

  app.get("/", (req, res) => {
    res.send("clicker api")
  })

  app.get("/getUserById/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
  })
  app.get("/getMessage/:id", async (req, res) => {
    const id = req.params.id
    const massMessages = await getMessagesGpt(id)
    res.send(massMessages)
  })

  app.post("/createMessageAndAnswer/:id", async (req, res) => {
    const id = req.params.id
    await createMessagesGpt(id, req.body.text, "ME")
    const message = await GPTUtil(req.body.text)
    // await createMessagesGpt(id, 'good', 'OPPOSITE')
    // res.send('good')
    res.send(message)
  })
  app.post("/deleteMessages/:id", async (req, res) => {
    const id = req.params.id
    const status = await deleteMessagesGpt(id)
    if (status) res.status(200)
  })

  app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT} and bot...maybe`)
  })
}

export { api }
