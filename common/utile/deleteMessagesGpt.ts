import { enumSideType } from '../../types/db.js'
import { IMyContext } from '../../types/session.js'
import { prisma } from '../../connect/db.js'
//добавляет/обновляет/возвращает пользователя | и всё в ctx.session помещается
export const deleteMessagesGpt = async (
  login: string,
) => {
  try {
    const status = await prisma.message.deleteMany({
  where: {
    user:{
      login
    }
  },
})
    return status
  } catch (e) {
    console.log(e)
  }
}
