import express from 'express'

import { bot } from '../connect/bot.js'
import cors from 'cors'

import 'dotenv/config'
import { getUserById } from '../common/users/getUserById.js'
import { createMessageGpt } from '../common/utile/createMessageGpt.js'
import { getMessagesGpt } from '../common/utile/getMessagesGpt.js'
import { GPTUtil } from '../utils/GPTUtil.js'

const api = async () => {
  const app = express()

  app.use(express.json())

  const corsOptions = {
    origin: [process.env.WEB_APP],
  }

  app.use(cors(corsOptions))

  process.env.MODE == 'prod'
    ? app.use(await bot.createWebhook({ domain: `${process.env.BOT_WEBHOOK}` }))
    : bot.launch()

  app.get('/', (req, res) => {
    res.send('clicker api')
  })

  app.get('/getUserById/:id', async (req, res) => {
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
  })
  app.get('/getMessage/:id', async (req, res) => {
    const id = req.params.id
    const massMessages = await getMessagesGpt(id)
    res.send(massMessages)
  })

  app.post('/createMessageAndAnswer/:id', async (req, res) => {
    console.log("hello from createMessageAndAnswer")
    const id = req.params.id
    await createMessageGpt(id, req.body.text, 'ME')
    const message = await GPTUtil(req.body.text)
    console.log("message ",message)
    await createMessageGpt(id, message, 'OPPOSITE')
    res.send(message)
  })

  app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT} and bot...maybe`)
  })
}

export { api }
