import { GoogleGenerativeAI } from '@google/generative-ai'
import { IMyContext } from '../types/session.js'
import { prisma } from '../connect/db.js'

export const GPTUtil = async (prompt: string) => {
  console.log('GPT', prompt)

  const genAI = new GoogleGenerativeAI(process.env.AI_KEY || '')
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const result = await model.generateContent(prompt)
  const response = result.response
  const text = response.text()
  return text
}

export const GPTUtilBot = async (ctx: IMyContext, prompt: string) => {
  if (ctx.session.user.scoreMoney < 50) {
    return
  }
  const text = await GPTUtil(prompt)
  await ctx.reply(text)
  await prisma.user.update({
    where: {
      login: ctx.from!.id.toString(),
    },
    data: {
      scoreMoney: ctx.session.user.scoreMoney - 50,
    },
  })
  ctx.session.user.scoreMoney = ctx.session.user.scoreMoney - 50
  console.log(ctx.session.user.scoreMoney)
}
