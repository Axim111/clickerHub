import { enumSideType } from '../../types/db.js'
import { IMyContext } from '../../types/session.js'
import { prisma } from './../../connect/db.js'
//добавляет/обновляет/возвращает пользователя | и всё в ctx.session помещается
export const createMessageGpt = async (login: string, text: string,side:enumSideType) => {
  try {
    const message = await prisma.message.create({
      data: {
        text,
        side,
        user: {
          connect: { login },
        },
      },
    })
    return message
  } catch (e) {
    console.log(e)
  }
}
