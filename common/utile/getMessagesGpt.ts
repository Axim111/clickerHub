import { enumSideType } from '../../types/db.js'
import { IMyContext } from '../../types/session.js'
import { prisma } from '../../connect/db.js'
//добавляет/обновляет/возвращает пользователя | и всё в ctx.session помещается
export const getMessagesGpt = async (login: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        user: {
          login,
        },
      },
    })
    return messages
  } catch (e) {
    console.log(e)
  }
}
