import { IMyContext } from '../../types/session.js'
import { prisma } from './../../connect/db.js'
export const buyPRO = async (ctx: IMyContext) => {
  try {
    if (!ctx.from) {
      return
    }
    const user = await prisma.user.update({
      where: {
        login: ctx.from.id.toString(),
      },
      data: {
        role: 'PRIVILEGE',
      },
    })
    ctx.session.user = user

    return user
  } catch (e) {
    console.log(e)
  }
}
