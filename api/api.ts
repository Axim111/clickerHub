import express from 'express'

import { bot } from '../connect/bot.js'
import cors from 'cors'

import 'dotenv/config'
import { getUserById } from '../common/users/getUserById.js'

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
    console.log(user)
    res.send(user)
  })

  app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT} and bot...maybe`)
  })
}

export { api }
